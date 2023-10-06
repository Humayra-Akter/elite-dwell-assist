import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loggedUser, setLoggedUser] = useState([]);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [selectedRole, setSelectedRole] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setLoggedUser(data);
      });
  }, []);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    signInError = <p className="text-red-500 text-xs mt-1">{error?.message}</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    const userExists = loggedUser.some(
      (user) => user.email === data.email && user.role === data.role
    );

    if (userExists) {
      signInWithEmailAndPassword(data.email, data.password, data.role);
      localStorage.setItem("userRole", data.role);
    } else {
      toast.error(
        `${data.email} or ${data.role} is invalid. Please check it again`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  };

  return (
    <div>
      {/* <div className="absolute top-52 left-1/3 w-full justify-center"> */}
      <div className="flex mt-32 items-center justify-center">
        <div className="card w-96 bg-transparent border-blue-100 border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-primary font-extrabold"
            >
              LOGIN
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email field */}
              <div className="form-control w-full pb-4">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="input input-sm input-bordered w-full "
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label>
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full pb-4">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Role
                  </span>
                </label>
                <select
                  name="role"
                  className="input input-sm input-bordered w-full"
                  {...register("role", {
                    required: {
                      value: true,
                      message: "Role is required",
                    },
                  })}
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="customer">Customer</option>
                  <option value="maid">Maid</option>
                  <option value="driver">Driver</option>
                  <option value="babysitter">Babysitter</option>
                </select>
                <label>
                  {errors.role?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.role.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Password field */}
              <div className="form-control w-full pb-7">
                <label className="label">
                  <span className="label-text text-blue-700 font-bold text-md">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-sm input-bordered w-full "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters longer",
                    },
                  })}
                />
                <label>
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <p className="text-left">
                <small className="font-semibold">
                  <Link className="text-blue-700" to="/register">
                    Forgot password?
                  </Link>
                </small>
              </p>
              {signInError}
              <input
                className="btn btn-sm text-xs w-full border-blue-500 text-white font-bold bg-primary"
                value="LOGIN"
                type="submit"
              />
            </form>
            <p className="text-center">
              <small className="font-semibold">
                New to elite-dwell-assist?Create new account
                <br />
                <Link className="text-blue-700" to="/register">
                  As Service Provider
                </Link>{" "}
                or{" "}
                <Link className="text-blue-700" to="/customer-register">
                  As Customer
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
