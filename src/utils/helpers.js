import { getStorage, ref, deleteObject } from "firebase/storage";
import pdfjsLib from "pdfjs";

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

// Get number of pages of pdf
export const getPages = (pdfUrl) => {
  console.log(pdfjsLib, "pdflib");
  const getNumPages = async (pdfUrl) => {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;
    return pdf.numPages;
  };

  // Usage example
  // const pdfUrl = 'https://example.com/path/to/my.pdf';
  getNumPages(pdfUrl)
    .then((numPages) => {
      console.log(`The PDF has ${numPages} pages`);
    })
    .catch((error) => {
      console.error("Error getting PDF number of pages:", error);
    });
};
