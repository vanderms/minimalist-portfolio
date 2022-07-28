import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="container relative pt-8 flex justify-between items-center">
        <Link to="/" aria-label="Homepage">
          <img src="/assets/logo.svg" alt="" />
        </Link>
        <button aria-label="toggle menu" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <IoClose className="w-6 h-6 text-neutral-800" />
          ) : (
            <IoMenu className="w-6 h-6 text-neutral-800" />
          )}
        </button>
        <div className="absolute top-[5.5rem] right-0 w-[13.9375rem] py-10 bg-neutral-800">
          <ul className="flex flex-col items-center gap-8">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT ME</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
