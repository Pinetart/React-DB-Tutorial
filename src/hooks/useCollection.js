import { useState, useEffect } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot } from "firebase/firestore";

export function useCollection(c) {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, c), (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
}
