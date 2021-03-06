import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //allows us to programmatically change the url
  const history = useHistory();

  const signIn = (e) => {
    //handle sing in
	e.preventDefault();
	
	auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      //successfully logged in a user with email and password
      if (auth) {
        history.push("/");
      }
    })
    .catch((error) => alert(error.message));

    //some firebase login happens here
  };

  const register = (e) => {
    //handle sing in
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created a user with email and password
		console.log(auth);
		if(auth){
			//redirect to root
			history.push('/')
		}
      })
      .catch((error) => alert(error.message));

    
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON conditions of Use & Sale. Please
          see our Privacy Notice, our Cookie Notice and our Interest-Based Ads
          Notice
        </p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
