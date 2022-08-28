import React from "react";
import icon from "../images/avatar.png";

export default class Nav extends React.Component {
  toggleMenu = () => {
    document.querySelector(".menu").classList.toggle("hidden");
  };
  render() {
    return (
      <nav className="sm:flex sm:justify-between text-center border-black border-b-8 bg-red-500">
        <div className="flex items-center  ">
          {/* button container */}
          <div className=" w-12 mx-auto mt-1 sm:hidden">
            {/* button for menu */}
            <button
              className="hover:bg-blue-300 p-1 "
              onClick={() => {
                document.querySelector(".menu").classList.toggle("hidden");
              }}
            >
              {/* image for button */}
              <img src={icon} alt="menu" />
            </button>
          </div>
          {/* Title of nav */}
          <span className="text-3xl font-bold pr-2">Pokemon Stats</span>
        </div>
        <div>
          {/* nav links */}
          <div>
            <ul className="menu hidden sm:flex">
              <li>
                <button className=" text-2xl bg-red-500 hover:bg-blue-300 p-1">
                  Home
                </button>
              </li>
              <li>
                <button className=" text-2xl bg-red-500 hover:bg-blue-300 p-1 sm:ml-2">
                  Pokemon
                </button>
              </li>
              <li>
                <button className=" text-2xl bg-red-500 hover:bg-blue-300 p-1 sm:ml-2">
                  Types
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
