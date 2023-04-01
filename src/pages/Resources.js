import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { headings } from "../utils/resourcesData";
import { BsBuildingsFill } from "react-icons/bs";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { PDFDocument } from "pdf-lib";

const Resources = () => {
  const [files, setFiles] = useState([]);

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
  console.log(files);

  return (
    <section className="resources">
      <PageHeader text="resources" />
      <div className="section-one">
        <div className="content-head-center">
          <div className="left">
            <div className="all">
              <span>
                <BsBuildingsFill />
              </span>
              <div className="text">
                <h2>23</h2>
                <p>total files</p>
              </div>

              <button>view all files</button>
            </div>
          </div>
          <div className="right">
            <div className="items">
              {headings.map((item) => {
                const { text, icon, id } = item;
                return (
                  <Link to={`/resources/${id}`} key={id} className="item">
                    <span>{icon}</span>
                    <div className="text">
                      <h2>{text}</h2>
                      <p>44 items</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
