import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

export default function autenticate(WrappedComponent) {
  return (props) => {
    const [user, setUser] = useState();
    const router = useRouter();
    useEffect(() => {
      axios
        .get("/api/get-current")
        .then((res) => {
          if (!res.data.status) {
            console.warn(res.data.message);
            router.push("/");
          }
          setUser(res.data?.data);
        })
        .catch((err) => {
          console.warn("Warning: ", err.response.data.message);
          router.push("/");
        });
    }, []);

    if (!user) {
      return (
        <>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            </div>
          </div>
        </>
      );
    }

    // Si el usuario está autenticado, renderizar el componente original
    return <WrappedComponent {...props} />;
  };
}
