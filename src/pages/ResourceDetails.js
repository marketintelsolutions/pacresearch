import React, { useEffect, useState } from "react";
import pattern from "../assets/images/pattern.jpg";
import { useParams } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { headings } from "../utils/resourcesData";
import {
  BsFileEarmarkPdfFill,
  BsFillFileEarmarkExcelFill,
  BsChevronDown,
} from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  list,
} from "firebase/storage";
import { getPages } from "../utils/helpers";
import {
  fetchFiles,
  fetchFirstPage,
  fetchNextPage,
} from "../utils/resources/resourcesHelpers";

const ResourceDetails = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const { heading, id: Id } = location.state || {};

  const [itemActive, setItemActive] = useState(id - 1);
  const [itemId, setItemId] = useState(Id);
  const [item, setItem] = useState(headings[itemActive]);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [allFiles, setAllFiles] = useState([]);

  const [financeActive, setFinanceActive] = useState(false);

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
                const { text, icon, sub } = item;

                // FOR FINANCIAL MARKET SUMMARY
                if (sub) {
                  return (
                    <div
                      key={index}
                      to={`/resources/${text}`}
                      className="sub-item"
                    >
                      <div
                        className="heading"
                        onClick={() => setFinanceActive(!financeActive)}
                      >
                        <h2>{text}</h2>
                        <span>
                          <BsChevronDown />
                        </span>
                      </div>
                      {financeActive && (
                        <div className="bottom">
                          <Link
                            className={`${
                              "financial market summary daily" === id
                                ? "item active"
                                : "item"
                            }`}
                            to={`/resources/financial market summary daily`}
                          >
                            <span>{icon}</span>
                            <h2>daily</h2>
                          </Link>
                          <Link
                            className={`${
                              "financial market summary weekly" === id
                                ? "item active"
                                : "item"
                            }`}
                            to={`/resources/financial market summary weekly`}
                          >
                            <span>{icon}</span>
                            <h2>weekly</h2>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
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
                <div className="total">
                  <p>total</p>{" "}
                  <p className="length">
                    <span>{files.length}</span>
                  </p>
                </div>
                <h3>
                  <span>{id}</span>
                </h3>
              </div>
              <div className="bottom">
                {!isLoading ? (
                  files.map((file, index) => {
                    const { name, size, downloadURL } = file;
                    // console.log(file, "file");
                    let fileType;
                    if (name?.endsWith(".pdf")) {
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
                        <span className="icon">
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

export default ResourceDetails;
