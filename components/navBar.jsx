import React from "react";

function NavBar() {
  return (
    <>
      <div className="navbar p-4 bg-lightpim w-full">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case m-2">
            <picture className="inline-block bg-logoSmall w-[100px] h-[60px] bg-contain bg-no-repeat " />
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
