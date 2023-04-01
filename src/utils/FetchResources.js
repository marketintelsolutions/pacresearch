import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { SiOnlyoffice, SiSpringsecurity } from "react-icons/si";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FetchResources = () => {
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const iconOptions = [
    AiOutlineAppstoreAdd,
    TbSeo,
    HiOutlineOfficeBuilding,
    SiOnlyoffice,
    SiSpringsecurity,
    BsDatabaseFillCheck,
  ];

  // #####################
  // GET FOLDERS
  useEffect(() => {
    const fetchFolders = async () => {
      setIsLoading(true);

      const storage = getStorage();
      const rootRef = ref(storage, "/");

      const getFolders = async (folderRef) => {
        const folders = await listAll(folderRef);
        return Promise.all(
          folders.prefixes.map(async (folder) => {
            const files = await getFiles(folder);

            const Icon =
              iconOptions[Math.floor(Math.random() * iconOptions.length)];
            return {
              id: uuidv4(), // Generate random id for each folder
              heading: folder.name,
              files,
              icon: <Icon />,
            };
          })
        );
      };

      const getFiles = async (folderRef) => {
        const files = await listAll(folderRef);
        return Promise.all(
          files.items.map(async (fileRef) => {
            const [metadata, downloadURL] = await Promise.all([
              getMetadata(fileRef),
              getDownloadURL(fileRef),
            ]);
            return {
              name: metadata.name,
              size: metadata.size,
              type: metadata.contentType,
              downloadURL,
            };
          })
        );
      };

      getFolders(rootRef)
        .then((folders) => {
          setFolders(folders);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error getting folders:", error);
        });
    };

    fetchFolders();
  }, []);

  //   console.log(folders, "folders");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="items">
      {folders.map((folder) => {
        const { heading, icon, id, files } = folder;
        return (
          <div
            onClick={() =>
              navigate(`/resources/${heading}`, {
                state: { heading, files, id },
              })
            }
            key={id}
            className="item"
          >
            <span>{icon}</span>
            <div className="text">
              <h2>{heading}</h2>
              <p>{files.length} items</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FetchResources;
