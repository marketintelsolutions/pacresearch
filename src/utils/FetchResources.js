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
import { Link } from "react-router-dom";

const FetchResources = () => {
  const [files, setFiles] = useState([]);

  const [folders, setFolders] = useState([]);

  const iconOptions = [
    AiOutlineAppstoreAdd,
    TbSeo,
    HiOutlineOfficeBuilding,
    SiOnlyoffice,
    SiSpringsecurity,
    BsDatabaseFillCheck,
  ];

  useEffect(() => {
    const storage = getStorage();
    const sectoralRef = ref(storage, "sectoral-report");

    console.log(sectoralRef);

    // List all the files in the "sectoral" folder
    listAll(sectoralRef)
      .then((res) => {
        // Get metadata and download URLs for each file
        Promise.all(
          res.items.map((itemRef) =>
            Promise.all([getMetadata(itemRef), getDownloadURL(itemRef)])
          )
        )
          .then((fileData) => {
            const files = fileData.map(([metadata, downloadURL]) => ({
              name: metadata.name,
              size: metadata.size,
              type: metadata.contentType,
              downloadURL,
            }));
            setFiles(files);
          })
          .catch((error) => {
            console.error("Error getting metadata and download URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing files:", error);
      });
  }, []);
  //   console.log(files, "files");

  // #####################

  useEffect(() => {
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
      })
      .catch((error) => {
        console.error("Error getting folders:", error);
      });
  }, []);

  console.log(folders);

  return (
    <div className="items">
      {folders.map((item) => {
        const { heading, icon, id } = item;
        return (
          <Link to={`/resources/${id}`} key={id} className="item">
            <span>{icon}</span>
            <div className="text">
              <h2>{heading}</h2>
              <p>44 items</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FetchResources;
