import React, { useState, useEffect } from "react";
import axios from "axios";

function VisualizeData() {
  const [medics, setMedics] = useState();
  const [loading, setloading] = useState(false);

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

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content border-2 ">
          {loading && (
            <>
              <span className="loading loading-ball loading-xs"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
            </>
          )}
          <div className="grid grid-cols-2 gap-x-20 justify-between content-center ">
            <div className="mr-4 p-2 overflow-x-hidden overflow-y-auto">
              {medics && !loading && (
                <>
                  {medics.map((medic) => {
                    return (
                      <>
                        <div
                          key={medic.id}
                          className="card  bg-base-100 shadow-xl m-4"
                        >
                          <div className="card-body">
                            <h2 className="card-title">
                              Matricula: {medic.matricula}
                            </h2>
                            <p>📧 Email: {medic.email}</p>
                            <p>📞 Telefono: {medic.telefono}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              )}
            </div>
            <div className="border-2 p-5 m-4 flex ">
              <div className="flex-1">
                <h2 className="bg-mainpim text-xl text-lightpim p-4 m-1 mb-4 rounded-md">
                  Cantidad de profesionales registrados: {medics.length}
                </h2>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Buscar por matricula</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Matricula"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <button className="btn btn-primary btn-wide mx-auto my-4">Buscar 🔎</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualizeData;
