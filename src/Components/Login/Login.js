import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/login.gif";

const Login = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto py-28 flex w-full flex-col justify-center sm:w-[350px]">
        <div className="card w-96 bg-transparent border-purple-300 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-blue-700 font-extrabold"
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
                  <Link className="text-purple-700" to="/register">
                    Forgot password?
                  </Link>
                </small>
              </p>
              <button
                className="btn w-full btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent "
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
              className="btn w-full btn-sm border-purple-500 text-purple-800 text-xs font-bold bg-gradient-to-r from-primary from-10% via-secondary via-30% to-90% to-accent "
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
