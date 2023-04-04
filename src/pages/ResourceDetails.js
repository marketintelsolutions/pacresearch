import React, { useEffect, useState } from "react";
import pattern from "../assets/images/pattern.jpg";
import { useParams } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { headings } from "../utils/resourcesData";
import {
  BsFileEarmarkPdfFill,
  BsFillFileEarmarkExcelFill,
} from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";

const ResourceDetails = (props) => {
  //   const userId = props.match.params.id;
  const { id } = useParams();
  const location = useLocation();
  const { heading, id: Id } = location.state || {};
  // console.log(location.state);

  const [itemActive, setItemActive] = useState(id - 1);
  const [itemId, setItemId] = useState(Id);
  const [item, setItem] = useState(headings[itemActive]);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(id, "id");

  // FETCH FILES
  useEffect(() => {
    const fetchFiles = () => {
      setIsLoading(true);
      const storage = getStorage();
      const sectoralRef = ref(storage, `${id}`);

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
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error getting metadata and download URLs:", error);
            });
        })
        .catch((error) => {
          console.error("Error listing files:", error);
        });
    };
    fetchFiles();
  }, [id]);

  // console.log(files, "files");

  useEffect(() => {
    setItemActive(id - 1);
    let item = headings[id - 1];
    // console.log("hello");
    setItem(item);
  }, [id]);

  useEffect(() => {
    const el = document.getElementById("resources");

    const { top } = el.getBoundingClientRect();
    const scrolledY = window.scrollY;

    const position = top + scrolledY - 50;

    window.scroll(0, position);
  }, []);

  return (
    <div className="resource-details">
      <section
        className="page-header"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <h1>{id}</h1>
        <p>
          <Link to="/">Home</Link> / <Link to="/resources"> Resources</Link> /
          <span> {id}</span>
        </p>
      </section>
      <div className="section-two" id="resources">
        <div className="content-center">
          <div className="content">
            <div className="right">
              {headings.map((item, index) => {
                const { text, icon } = item;

                return (
                  <Link
                    key={index}
                    className={`${text === id ? "item active" : "item"}`}
                    to={`/resources/${text}`}
                  >
                    <span>{icon}</span>
                    <h2>{text}</h2>
                  </Link>
                );
              })}
            </div>
            <div className="left">
              <div className="top">
                <p>total</p> <span>{files.length}</span>
              </div>
              <div className="bottom">
                {!isLoading ? (
                  files.map((file, index) => {
                    const { name, size, downloadURL } = file;
                    console.log(file);
                    let fileType;
                    if (name.endsWith(".pdf")) {
                      // console.log("I love you");
                      fileType = "pdf";
                    }
                    return (
                      <a
                        key={index}
                        className="item"
                        href={downloadURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          {fileType === "pdf" ? (
                            <BsFileEarmarkPdfFill />
                          ) : (
                            <BsFillFileEarmarkExcelFill />
                          )}
                        </span>
                        <h2>{name}</h2>
                        <p>
                          <RiPagesLine /> {size}
                        </p>
                      </a>
                    );
                  })
                ) : (
                  <h2>Loading...</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;
