import React from "react";
import axios from "axios";

function NavBar() {
  // const handleLogout = () => {
  //   axios
  //     .post("/api/logout")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  return (
    <>
      <div className="navbar p-4 bg-lightpim w-full">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case m-2">
            <picture className="inline-block bg-logoSmall w-[100px] h-[60px] bg-contain bg-no-repeat " />
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-error rounded-box "
            >
              <li
              //  onClick={() => handleLogout()}
              >
                <p className=" m-auto font-semibold">Salir</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
