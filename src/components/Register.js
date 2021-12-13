import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth
} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./Register.module.css";

const Register = () => {

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });

  return (
    <div className="register">
        <h1>REGISTER</h1>
    </div>
  );
}
export default Register;