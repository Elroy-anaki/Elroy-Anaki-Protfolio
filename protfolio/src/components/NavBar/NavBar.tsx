import React from "react";
import { INavBarProps } from "./NavBar.interface";
import { Link } from "react-router-dom";

const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
  return (
    <nav className="w-full h-[10vh] bg-dark border-b-2 border-white">
      <ul className="flex justify-start items-center gap-10 py-4 px-10">
        {props.links.map((link, index) => (
          <li
            className={
              link.className ??
              `text-xl text-white py-2 px-3 font-bold 
               hover:rounded-lg hover:bg-neutral`
            }
          >
            <Link to={link.to} key={index}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
