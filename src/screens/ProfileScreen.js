import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
          <div className="profileScreen__plans">
            <h3>Plans</h3>
            <button
              onClick={() =>{
                signOut(auth);
              }}
              className="profileScreen__signout"
            >
              Sign out
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
