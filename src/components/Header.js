import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        ("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/Sign out
        // console.log(user)
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 w-full bg-gradient-to-br from-black flex items-center justify-between">
      <img src="../images/Netflix_Logo_PMS.png" alt="logo" className="w-56 px-[2rem]" />

      {user && (
        <button type="button" className="mr-8" onClick={handleSignOut}>
          <img src={user.photoURL} alt="sign out" className="w-12" />
          <span className=" font-bold text-white ">Sign Out</span>
        </button>
      )}
    </div>
  );
}

export default Header;
