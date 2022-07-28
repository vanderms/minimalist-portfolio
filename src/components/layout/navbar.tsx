import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import React, { useState } from "react";

const LinkItem: React.FC<{ to: string; children: React.ReactNode }> = (props) => {
  return (
    <li className="contents">
      <NavLink
        to={props.to}
        className={`text-[0.75rem] leading-[0.875rem] tracking-[0.125rem] text-neutral-50 
        md:text-neutral-800 md:[&.active]:text-primary`}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="container relative pt-8 flex justify-between items-center md:pt-16">
        <Link to="/" aria-label="Homepage">
          <img src="/assets/logo.svg" alt="" />
        </Link>
        <button
          aria-label="toggle menu"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <IoClose className="w-6 h-6 text-neutral-800" />
          ) : (
            <IoMenu className="w-6 h-6 text-neutral-800" />
          )}
        </button>
        <div
          className={`absolute z-50  right-0 w-[13.9375rem] py-10 bg-neutral-800 ${
            menuOpen ? "top-[5.5rem] transition-all duration-300" : "top-[-100vh]"
          }
            md:contents
          `}
        >
          <ul className="flex flex-col items-center gap-8 md:flex-row md:flex-gap-[2.6563rem]">
            <LinkItem to="/">HOME</LinkItem>
            <LinkItem to="/portfolio">PORTFOLIO</LinkItem>
            <LinkItem to="/contact">CONTACT ME</LinkItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}
