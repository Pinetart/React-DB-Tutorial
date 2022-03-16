import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        success: true,
        error: null,
      };
    case "ERROR":
      return { document: null, isPending: false, success: false, error: true };
    default:
      return state;
  }
};
export function useFirestore(collection) {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection
  const ref = projectFirestore.collection(collection);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const addedDocument = await ref.add(doc);
      if (!addedDocument) {
        throw new Error("Failed to add document");
      }
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // delete document
  const deleteDocument = async (doc) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { addDocument, deleteDocument, response };
}
