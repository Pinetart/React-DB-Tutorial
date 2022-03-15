import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";

export function useSignup() {
  const [isCancelled, setIsCancelled] = useState(false); //Cleanup function sets this in useEffect
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await res.user.updateProfile({ displayName: displayName });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        //Cleanup function using IFs
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true); // cleanup function
  }, []);
  return { error, isPending, signup };
}
