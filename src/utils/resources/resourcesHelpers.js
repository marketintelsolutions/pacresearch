export const fetchFirstPage = async (
  id,
  setFiles,
  setIsLoading,
  list,
  listRef,
  setPageToken,
  getMetadata,
  getDownloadURL
) => {
  // Check if files are already in localStorage
  const localStorageFiles = localStorage.getItem(`${id}`);
  // console.log(JSON.parse(localStorageFiles), "localStorageFiles");
  if (localStorageFiles) {
    setFiles(JSON.parse(localStorageFiles));
    return;
  }
  setIsLoading(true);

  const firstPage = await list(listRef, {
    maxResults: 10,
    metadata: ["name", "contentType"],
  });
  setPageToken(firstPage.nextPageToken);

  Promise.all(
    firstPage.items.map((itemRef) =>
      Promise.all([getMetadata(itemRef), getDownloadURL(itemRef)])
    )
  )
    .then((fileData) => {
      const files = fileData.map(([metadata, downloadURL]) => {
        console.log(metadata, "metadata");
        return {
          name: metadata.name,
          size: metadata.size,
          type: metadata.contentType,
          downloadURL,
          dateCreated: metadata.timeCreated,
        };
      });
      setFiles(files);
      setIsLoading(false);
      // console.log(files);
      // Update localStorage
      localStorage.setItem(`${id}`, JSON.stringify(files));
    })
    .catch((error) => {
      console.error("Error getting metadata and download URLs:", error);
    });
  // console.log(firstPage.items, ".item");
};

// FETCH NEXT SET OF FILES
export const fetchNextPage = async (
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
) => {
  if (files.length < allFiles.length) {
    const nextPage = await list(listRef, {
      maxResults: 10,
      pageToken: pageToken,
    });
    setPageToken(nextPage.nextPageToken);

    Promise.all(
      nextPage.items.map((itemRef) =>
        Promise.all([getMetadata(itemRef), getDownloadURL(itemRef)])
      )
    )
      .then((fileData) => {
        const newFiles = fileData.map(([metadata, downloadURL]) => ({
          name: metadata.name,
          size: metadata.size,
          type: metadata.contentType,
          downloadURL,
          dateCreated: metadata.timeCreated,
        }));
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        setIsLoading(false);

        // Update localStorage
        localStorage.setItem(`${id}`, JSON.stringify([...files, ...newFiles]));
      })
      .catch((error) => {
        console.error("Error getting metadata and download URLs:", error);
      });
    // setFiles((prevFiles) => [...prevFiles, ...nextPage.items]);

    // localStorage.removeItem(`${id}`);

    // previous local storage items
    // const prevItems = JSON.parse(localStorage.getItem(`${id}`));

    // Update localStorage
    // localStorage.setItem(
    //   `${id}`,
    //   JSON.stringify([...prevItems, ...nextPage.items])
    // );
  }
};

// FETCH ALL FILES
export const fetchFiles = (
  getStorage,
  ref,
  id,
  listAll,
  getMetadata,
  getDownloadURL,
  setAllFiles
) => {
  // setIsLoading(true);
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
            dateCreated: metadata.timeCreated,
          }));
          setAllFiles(files);
          // setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error getting metadata and download URLs:", error);
        });
    })
    .catch((error) => {
      console.error("Error listing files:", error);
    });
};
