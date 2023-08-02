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
import { MdDelete } from "react-icons/md";
import {
  getStorage,
  ref,
  listAll,
  getMetadata,
  list,
  uploadBytesResumable,
  getDownloadURL,
  // storageRef,
} from "firebase/storage";
import { deleteFile } from "../utils/helpers";
import {
  fetchFiles,
  fetchFirstPage,
  fetchNextPage,
} from "../utils/resources/resourcesHelpers";
// import firebase from "firebase";
// import "firebase/storage";

const ResourcesAdmin = () => {
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

  const [allFiles, setAllFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isUpload, setIsUpload] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  console.log(id, "id");

  // FETCH ALL FILES
  useEffect(() => {
    fetchFiles(
      getStorage,
      ref,
      id,
      listAll,
      getMetadata,
      getDownloadURL,
      setAllFiles
    );
  }, [id]);

  // FETCH FILES NEW
  const [pageToken, setPageToken] = useState(null);

  const storage = getStorage();
  const listRef = ref(storage, `${id}`);

  useEffect(() => {
    fetchFirstPage(
      id,
      setFiles,
      setIsLoading,
      list,
      listRef,
      setPageToken,
      getMetadata,
      getDownloadURL
    );
  }, [id]);

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

  // UPLOAD FILE
  // const [file, setFile] = useState(null);
  const [newFiles, setNewFiles] = useState([]);

  const handleFileChange = (event) => {
    console.log(event.target.files);
    const filesObj = event.target.files;

    const filesArr = [];

    for (let i in filesObj) {
      if (i !== "length" && i !== "item") {
        filesArr.push(filesObj[i]);
      }
    }
    console.log(filesArr, "files");
    setNewFiles(filesArr);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setIsUpload(true);

    const files = newFiles;

    // Create the file metadata
    const metadata = {
      contentType: "application/pdf",
    };

    Array.from(files).forEach((file) => {
      console.log("hello", files);
      const storageRef = ref(storage, "new/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Listen for state changes, errors, and completion of the upload
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            // ...
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });

          setTimeout(() => {
            setIsUploadOpen(false);
            setNewFiles([]);
            setIsUpload(false);
          }, 3000);
        }
      );
    });
  };

  // REMOVE ITEM
  const removeItem = (item) => {
    const updatedFiles = newFiles.filter((file) => file.name !== item.name);

    setNewFiles(updatedFiles);
  };

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
                    to={`/resources/${text}/pacadmin101`}
                  >
                    <span>{icon}</span>
                    <h2>{text}</h2>
                  </Link>
                );
              })}
            </div>
            <div className="left">
              <div className="top">
                <div className="total">
                  <p>total</p> <span>{files.length}</span>
                </div>
                <h3>
                  <span>{id}</span>
                </h3>

                {/* UPLOAD FILES */}

                <div className="button">
                  {/* <label htmlFor="upload" className="label">
                    Select files
                  </label> */}

                  <button
                    // className="upload-button"
                    className="label"
                    onClick={() => setIsUploadOpen(true)}
                  >
                    Upload
                  </button>
                  <input
                    type="file"
                    id="upload"
                    name="upload"
                    multiple
                    onChange={handleFileChange}
                  />
                  {isUploadOpen && (
                    <div className="upload-file">
                      <div className="content-center">
                        <div
                          className="close"
                          onClick={() => setIsUploadOpen(false)}
                        >
                          x
                        </div>

                        {newFiles.length > 0 ? (
                          <>
                            {isUpload && (
                              <span>
                                {progress === 100 ? (
                                  <p>Upload Complete</p>
                                ) : (
                                  <>
                                    Uploading... {progress.toFixed(2)}%{" "}
                                    <progress value={progress} max="100" />{" "}
                                  </>
                                )}
                              </span>
                            )}
                            <button onClick={handleUpload} className="label">
                              Upload
                            </button>
                            <h2>
                              Selected Files:{" "}
                              <span
                                className="label"
                                onClick={() => setNewFiles([])}
                              >
                                clear all
                              </span>
                            </h2>
                            {newFiles?.map((item, index) => (
                              <p>
                                {index + 1}. {item.name}{" "}
                                <span onClick={() => removeItem(item)}>x</span>
                              </p>
                            ))}
                          </>
                        ) : (
                          <>
                            {" "}
                            <h2>No files selected</h2>
                            <label htmlFor="upload" className="label">
                              Select files
                            </label>
                            <input
                              type="file"
                              id="upload"
                              name="upload"
                              multiple
                              onChange={handleFileChange}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bottom">
                {!isLoading ? (
                  files.map((file, index) => {
                    const { name, size, downloadURL, dateCreated } = file;

                    let fileType;
                    if (name?.endsWith(".pdf")) {
                      fileType = "pdf";
                    }

                    return (
                      <div key={index} className="item">
                        <span className="icon">
                          {fileType === "pdf" ? (
                            <BsFileEarmarkPdfFill />
                          ) : (
                            <BsFillFileEarmarkExcelFill />
                          )}
                        </span>
                        <h2>{name}</h2>
                        <p>
                          <span>
                            <RiPagesLine /> {dateCreated}{" "}
                          </span>
                          <span>
                            <a
                              href={downloadURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              open
                            </a>
                          </span>
                          <span
                            className="delete-icon"
                            onClick={() =>
                              deleteFile("new", name, files, setFiles)
                            }
                          >
                            <MdDelete />
                          </span>
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <h2>Loading...</h2>
                )}
                {/* {files < allFiles && (
                  <button className="button">
                    <span onClick={fetchNextPage}>Load More</span>
                  </button>
                )} */}
                <button className="button">
                  <span
                    onClick={() =>
                      fetchNextPage(
                        id,
                        setFiles,
                        setIsLoading,
                        list,
                        listRef,
                        setPageToken,
                        getMetadata,
                        getDownloadURL,
                        files,
                        allFiles,
                        pageToken
                      )
                    }
                    disabled={files.length === allFiles.length}
                  >
                    Load More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesAdmin;
