import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const createBook = (title) => {
  return addDoc(collection(db, "books"), {
    title: title,
  });
};

export const deleteBook = (id) => {
  return deleteDoc(doc(db, "books", id));
};
import React from "react";

export function modifyBook() {
  return <div>modifyBook</div>;
}
