import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <img
          src="https://imgs.search.brave.com/PKpnMCK4xY2Eo2rn05aeU1mtDh_PkJSeB97QNAgs5NM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NjU2NTI3NC9waG90/by9tb2Rlcm4tYWJz/dHJhY3Qtd2F2eS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1O/bzY3SUFmMEIxUDZU/SHhQaVUyekk5elBW/cDZKNndFdWZfOHpF/czNpSEt3PQ"
          alt="Desert"
        />

        <h2>
          Capturing Moments, <br />
          Creating Memories
        </h2>

        <button className="back-btn">Back to website</button>

        <div className="slider">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="right">
        <h1>Welcome Back</h1>

        <p>
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </p>

        <form>
          <input type="email" placeholder="Email" />

          <div className="password-box">
            <input type="password" placeholder="Enter your password" />
          </div>

          <label htmlFor="check">
            <input type="checkbox" id="check" /> I agree to the{" "}
            <a href="#">Terms &amp; Conditions</a>
          </label>

          <br />

          <button type="submit">Log In</button>

          <p>Or Login with</p>

          <div className="social">
            <button type="button">Google</button>
            <button type="button">Apple</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
