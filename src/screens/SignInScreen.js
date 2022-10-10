import React, { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then(
      (authUser)=>{
        console.log(authUser);
      }
    ).catch(
      (error) =>{
        alert(error.message);
      }
    )
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          New to Netflix?{" "}
          <span>
            <a href="/" onClick={register}>
              Sign Up Now.
            </a>
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
