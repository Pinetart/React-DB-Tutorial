import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useCreateDelete = () => {
  const createBook = (title) => {
    return addDoc(collection(db, "books"), {
      title: title,
    });
  };

  const deleteBook = (id) => {
    return deleteDoc(doc(db, "books", id));
  };
  return { createBook, deleteBook };
};
