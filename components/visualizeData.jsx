import React, { useState, useEffect } from "react";
import axios from "axios";

function VisualizeData() {
  const [medics, setMedics] = useState([]);
  const [matricula, setMatricula] = useState(false);
  const [email, setEmail] = useState(false);
  const [telefono, setTelefono] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [findMedic, setFindMedic] = useState();

  useEffect(() => {
    setloading(true);
    axios
      .get("/api/get-all")
      .then((res) => {
        if (res.data.status) {
          setMedics([...res.data.medicos]);
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  const filterMedic = (e) => {
    e.preventDefault();
    const dato = e.target[3].value;
    if (!matricula && !email && !telefono) {
      setError("Eliga un metodo de busqueda porfavor");
    }
    if (matricula) {
      if (!isNaN(dato)) {
        const filter = medics.filter((medic) => medic.matricula === dato);
        setFindMedic(filter);
      } else {
        setError("Solo se aceptan numeros para la matricula");
      }
    }
    if (email) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (emailRegex.test(dato)) {
        const filter = medics.filter((medic) => medic.email.trim() == dato);
        setFindMedic(filter);
      } else {
        setError("Indique un mail valido porfavor");
      }
    }
    if (telefono) {
      if (!isNaN(dato)) {
        const filter = medics.filter((medic) => medic.telefono === dato);
        setFindMedic(filter);
      } else {
        setError("Solo se aceptan numeros para el telefono");
      }
    }
  };
  if (loading) {
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

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="grid grid-cols-1 gap-x-20 justify-between content-center ">
          <div className="flex flex-wrap order-2">
            {medics && (
              <>
                {medics.map((medic, index) => {
                  return (
                    <>
                      <div
                        key={medic.id}
                        className="flex-initial card bg-base-100 shadow-xl m-4"
                      >
                        <div className="card-body">
                          <h2 className="card-title">
                            Matricula:{" "}
                            <span className="bg-mainpim font-black p-2  text-[#E6DFDF] rounded-lg">
                              {medic.matricula}
                            </span>
                          </h2>
                          <p>
                            📧 Email:{" "}
                            <span className="text-primpim font-semibold text-md">
                              {medic.email}
                            </span>
                          </p>
                          <p>
                            📞 Telefono:{" "}
                            <span className="text-primpim font-semibold text-md">
                              {medic.telefono}
                            </span>
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>

          <div className="p-5 m-4 grid grid-rows-1">
            <h2 className="bg-mainpim text-xl text-[#E6DFDF] p-2 m-1 rounded-md">
              Cantidad de profesionales registrados:{" "}
              <span className="bg-[#E6DFDF] text-mainpim px-4 ml-2 mb-4 rounded-md">
                {medics?.length}
              </span>
            </h2>

            <form onSubmit={(e) => filterMedic(e)} className="form-control">
              <div className="m-2">
                <label
                  onClick={(e) => {
                    e.target.checked
                      ? (setMatricula(true),
                        setEmail(false),
                        setTelefono(false))
                      : setMatricula(false);
                  }}
                  className="label-text mx-2 bg-primpim px-2 rounded-md"
                >
                  📝 Buscar por matricula
                  <input className="m-2" type="radio" name="radio-1" />
                </label>
                <label
                  onClick={(e) => {
                    e.target.checked
                      ? (setEmail(true),
                        setMatricula(false),
                        setTelefono(false))
                      : setEmail(false);
                  }}
                  className="label-text mx-2 bg-primpim px-2 rounded-md"
                >
                  📧 Buscar por email
                  <input className="m-2" type="radio" name="radio-1" />
                </label>
                <label
                  onClick={(e) => {
                    e.target.checked
                      ? (setTelefono(true),
                        setEmail(false),
                        setMatricula(false))
                      : setTelefono(false);
                  }}
                  className="label-text mx-2 bg-primpim px-2 rounded-md"
                >
                  📞 Buscar por telefono
                  <input className="m-2" type="radio" name="radio-1" />
                </label>
              </div>
              <input
                type="text"
                placeholder="Matricula"
                className="input input-bordered"
                onChange={() => setError(undefined)}
              />
              <button
                type="submit"
                className="btn btn-primary lg:btn-wide mx-auto my-4"
              >
                Buscar 🔎
              </button>
            </form>
            {error && (
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
                  <span>{error}</span>
                </div>
              </>
            )}
          </div>
          {findMedic &&
            findMedic.map((medic, index) => {
              // console.log(medic);
              return (
                <>
                  <div
                    key={index}
                    className="flex-initial card bg-base-100 shadow-xl m-4"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Matricula:{" "}
                        <span className="bg-mainpim font-black p-2  text-[#E6DFDF] rounded-lg">
                          {medic.matricula}
                        </span>
                      </h2>
                      <p>
                        📧 Email:{" "}
                        <span className="text-primpim font-semibold text-md">
                          {medic.email}
                        </span>
                      </p>
                      <p>
                        📞 Telefono:{" "}
                        <span className="text-primpim font-semibold text-md">
                          {medic.telefono}
                        </span>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
}

export default VisualizeData;
