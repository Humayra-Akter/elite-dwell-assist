import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import imggg from "../../images/bg.jpg";

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
    const matchingUser = loggedUser.find(
      (sysUser) => sysUser.email === data.email && sysUser.role === data.role
    );
    console.log(matchingUser);
    if (matchingUser) {
      signInWithEmailAndPassword(data.email, data.password);
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
    <div className="bg-slate-100 pb-56 pt-28">
      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card bg-transparent border-blue-300 border-4 shadow-xl">
            <div className="flex">
              <div
                style={{
                  background: `url(${imggg})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="form-control flex items-center justify-center w-80  mt-20 ">
                  <label className="label">
                    <span className="label-text mb-3 text-white font-bold text-md">
                      Select your Role
                    </span>
                  </label>
                  {/* Customer Role */}
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="customer"
                      className="hidden "
                      {...register("role", {
                        required: {
                          value: true,
                          message: "Role is required",
                        },
                      })}
                      checked={selectedRole === "customer"}
                      onChange={() => setSelectedRole("customer")}
                    />
                    <div
                      className={`p-2 rounded-lg ${
                        selectedRole === "customer"
                          ? "bg-sky-300 text-black w-48 text-center font-extrabold gap-5"
                          : "btn btn-sm text-xs w-48 text-white font-bold bg-primary border-blue-500"
                      }`}
                    >
                      <i className="fa fa-user text-black mr-2"></i>Customer
                    </div>
                  </label>

                  {/* Maid Role */}
                  <label className="cursor-pointer my-2 ">
                    <input
                      type="radio"
                      name="role"
                      value="maid"
                      className="hidden "
                      {...register("role", {
                        required: {
                          value: true,
                          message: "Role is required",
                        },
                      })}
                      checked={selectedRole === "maid"}
                      onChange={() => setSelectedRole("maid")}
                    />
                    <div
                      className={`p-2 rounded-lg ${
                        selectedRole === "maid"
                          ? "bg-sky-300 text-black w-48 text-center font-extrabold  gap-5"
                          : "btn btn-sm text-xs w-48 text-white font-bold bg-primary border-blue-500"
                      }`}
                    >
                      <i className="fa fa-broom text-black mr-2"></i>Maid
                    </div>
                  </label>

                  {/* Driver Role */}
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="driver"
                      className="hidden"
                      {...register("role", {
                        required: {
                          value: true,
                          message: "Role is required",
                        },
                      })}
                      checked={selectedRole === "driver"}
                      onChange={() => setSelectedRole("driver")}
                    />
                    <div
                      className={`p-2 rounded-lg ${
                        selectedRole === "driver"
                          ? "bg-sky-300 text-black w-48 text-center font-extrabold  gap-5"
                          : "btn btn-sm text-xs w-48 text-white font-bold bg-primary border-blue-500"
                      }`}
                    >
                      <i className="fa fa-car text-black mr-2"></i>Driver
                    </div>
                  </label>

                  {/* Babysitter Role */}
                  <label className="cursor-pointer my-2 ">
                    <input
                      type="radio"
                      name="role"
                      value="babysitter"
                      className="hidden"
                      {...register("role", {
                        required: {
                          value: true,
                          message: "Role is required",
                        },
                      })}
                      checked={selectedRole === "babysitter"}
                      onChange={() => setSelectedRole("babysitter")}
                    />
                    <div
                      className={`p-2 rounded-lg ${
                        selectedRole === "babysitter"
                          ? "bg-sky-300 text-black w-48 text-center font-extrabold  gap-5"
                          : "btn btn-sm text-xs w-48 text-white font-bold bg-primary border-blue-500"
                      }`}
                    >
                      <i className="fa fa-child text-black mr-2"></i>
                      Babysitter
                    </div>
                  </label>

                  <label>
                    {errors.role?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.role.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="card-body">
                <h1
                  style={{ fontFamily: "arial" }}
                  className="text-center text-2xl text-primary font-extrabold"
                >
                  LOGIN
                </h1>

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
        </form>
      </div>
    </div>
  );
};

export default Login;
