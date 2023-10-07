import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {USER_IMG} from "../utils/constant";


function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const isLoginHandle = () => {
    setIsLogin(!isLogin);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //Validate Form
    const message = validateData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    if (!isLogin) {
      // Sign Up form logic
      // createUserWithEmailAndPassword(auth, email, password)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_IMG,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };
  return (
    <>
      
      <div className="bg-gradient-to-br from-black w-full h-full relative">
        <img src="../images/herosec.jpg" alt="log" className=" " />
        <Header />
      </div>

      <div className=" absolute top-[20%] flex items-center justify-center w-[100%] font-Roboto">
        <form
          className="w-[26rem] px-[3.5rem] py-[3rem] bg-black rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="text-3xl font-semibold mb-5 text-white font-Roboto">
            {isLogin ? "Sign In" : "Sign up"}
          </h2>
          {!isLogin && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Full Name"
              className="mb-5 p-3 w-[100%] bg-[#2d2c2d] rounded-md text-white"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Enter Email"
            className="mb-5 p-3 w-[100%] bg-[#2d2c2d] rounded-md text-white"
          />
          <br></br>
          <input
            type="password"
            ref={password}
            placeholder="Enter password"
            className="mb-5 p-3 w-[100%] bg-[#2d2c2d] rounded-md text-white"
          />
          <br></br>
          <p className="text-lg text-red-600 font-bold">{errorMessage}</p>
          <button
            type="button"
            className="mt-5 bg-red-600 text-lg text-white p-3 w-[100%] rounded-md"
            onClick={handleButtonClick}
          >
            {" "}
            {isLogin ? "Sign In" : "Sign up"}
          </button>
          <p className="text-white mt-5 font-Roboto">
            {" "}
            {isLogin ? "New to Netflix? " : "Already member? "}
            <span onClick={isLoginHandle} className="cursor-pointer underline">
              {isLogin ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
