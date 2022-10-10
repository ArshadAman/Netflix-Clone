import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {

  const[show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () =>{
    if(window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          className="nav__logo"
          onClick={()=>history.push('/')}
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
          className="nav__avatar"
          onClick={()=>history.push("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
