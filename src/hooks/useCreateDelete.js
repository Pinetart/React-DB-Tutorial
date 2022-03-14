import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export const useCreateDelete = () => {
  const { user } = useAuthContext();
  const createBook = (title) => {
    return addDoc(collection(db, "books"), {
      title: title,
      uid: user.uid,
    });
  };

  const deleteBook = (id) => {
    return deleteDoc(doc(db, "books", id));
  };
  return { createBook, deleteBook };
};
