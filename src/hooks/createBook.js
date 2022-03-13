import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const createBook = (setTitle) => {
  return addDoc(collection(db, "books"), {
    title: setTitle,
  });
};
