import { getStorage, ref, deleteObject } from "firebase/storage";

export const deleteFile = (folder, fileName, files, setFiles) => {
  const storage = getStorage();

  // Create a reference to the file to delete
  const desertRef = ref(storage, `${folder}/${fileName}`);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
      console.log("file deleted");
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });

  const newFiles = files.filter((file) => file.name !== fileName);
  localStorage.removeItem(`${folder}`);
  localStorage.setItem(`${folder}`, JSON.stringify(newFiles));
  setFiles(newFiles);
};
