import { projectAuth } from "../firebase/config";
import { useState } from "react";

export function useSignup() {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await res.user.updateProfile({ displayName: displayName });
      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
}
