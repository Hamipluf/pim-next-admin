import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Login from "../components/login";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: undefined,
    autorized: false,
    iat: undefined,
    exp: undefined,
  });

  useEffect(() => {
    axios
      .get("/api/get-current")
      .then((res) => {
        if (!res.data.status) {
          console.warn(res.data.message);
        }
        setUser(res.data?.data);
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      })
      .catch((err) => {
        console.warn("Warning: ", err.response.data.message);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div
        className={`transition-all duration-500 ease-in-out ${
          user?.autorized
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full"
        } alert drop-shadow-strong m-4 w-5/12`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">
            Bienvenido de vuelta!{" "}
            <span className="text-primpim">{user.email}</span> 👋
          </h3>
          <div className="text-xs bg-success p-1 m-2 w-5/12 rounded-md font-bold text-lightpim">
            Redirigiendo . . .
          </div>
        </div>
      </div>
      <Login />
      <Footer />
    </>
  );
}
