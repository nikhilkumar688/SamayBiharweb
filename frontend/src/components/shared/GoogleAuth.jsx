import React from "react";
import { Button } from "../ui/button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "@/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "@/redux/user/userSlice";
const GoogleAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const firebaseResponse = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firebaseResponse.user.displayName,
          email: firebaseResponse.user.email,
          profilePhotoUrl: firebaseResponse.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        type="button"
        className="bg-[#FF7722] w-full"
        onClick={handleGoogleClick}
      >
        Continue with Google
      </Button>
    </div>
  );
};
export default GoogleAuth;
