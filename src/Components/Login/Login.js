import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import banner from "../../images/babysitter.jpg";

const Login = () => {
  return (
    <div>
      <svg viewBox="0 0 500 200">
        <path
          d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0"
          fill="rgb(91, 75, 210)"
        ></path>
        <path
          d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0"
          fill="#0E7452"
          opacity="0.8"
        ></path>
        <path
          d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0"
          fill="#5b4bd2"
          opacity="0.5"
        ></path>
      </svg>
      <div className="absolute top-52 left-1/3 w-full justify-center">
        <div className="card w-96 bg-transparent border-blue-300 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-white font-extrabold"
            >
              LOGIN
            </h1>
            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
              <div className="form-control pt-5 w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-xs">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              {/* password field */}
              <div className="form-control w-full max-w-xs pb-7">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-xs">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <p className="text-left">
                <small className="font-semibold">
                  <Link className="text-blue-700" to="/register">
                    Forgot password?
                  </Link>
                </small>
              </p>
              <button
                className="btn btn-sm text-xs w-full border-blue-500 text-white font-bold bg-primary"
                type="submit"
              >
                Login
              </button>
              {/* {loading && <div>Loading...</div>} */}
            </form>
            <p className="text-center">
              <small className="font-semibold">
                New to elite-dwell-assist?
                <Link className="text-blue-700" to="/register">
                  Create new account
                </Link>
              </small>
            </p>
            {/* <div className="divider">OR</div>
            <button
              //   onClick={() => signInWithGoogle()}
              className="btn w-full btn-sm border-blue-500 text-blue-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent "
            >
              Continue with Google
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
