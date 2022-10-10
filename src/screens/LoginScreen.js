import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import "./SignInScreen";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const getStEmail = useRef(null);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="loginScreen__logo"
        />
        <button className="sign__in" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignInScreen email = {getStEmail.current.value} />
          ) : (
            <>
              <h1 className="heading">Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" ref={getStEmail} />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
