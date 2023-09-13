import React, { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";


function login() {
  const [Jwt, setJwt] = useState();
  const [toggle, settoggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [autorized, setAutorized] = useState();
  const [unAutorized, setUnAutorized] = useState();
  const [adminData, setAdminData] = useState({
    email: undefined,
    password: undefined,
  });
// Falta la persistencia de sesion con JWT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/login", adminData);
      if (data.status) {
        setAutorized(data.message);
        setTimeout(() => {
          window.location.assign("/dashboard");
        }, 3000);
      }
    } catch (error) {
      if (!error.response?.data.status) {
        setUnAutorized(error.response?.data.message);
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="hero my-10 p-5 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">
              Bienvenidos a la Base de datos de Puerto Imagenes Mar Del Plata
            </h1>
            <p className="py-6">
              Porfavor Ingrese con el usuario de administrador
            </p>
            {unAutorized && (
              <>
                <div className="alert alert-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>{unAutorized}</span>
                </div>
              </>
            )}
            {autorized && (
              <>
                <div className="alert alert-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span> Redireccionando . . . </span>
                </div>
              </>
            )}
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="card card-normal flex-shrink-0 shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => {
                    setAdminData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    })),
                      setUnAutorized(undefined);
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => settoggle(!toggle)}
                  >
                    {toggle ? "👀" : "❌"}
                  </span>
                </label>
                <input
                  type={`${toggle ? "text" : "password"}`}
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => {
                    setAdminData((prevData) => ({
                      ...prevData,
                      password: e.target.value,
                    })),
                      setUnAutorized(undefined);
                  }}
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                {loading ? (
                  <>
                    <span className="loading loading-ring loading-lg m-auto"></span>
                  </>
                ) : (
                  <>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default login;
