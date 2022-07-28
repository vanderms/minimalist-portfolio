import React from "react";
import { Link } from "react-router-dom";

export const ActionLinkPrimary: React.FC<{ to: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <Link
      to={props.to}
      className="flex items-center h-12 bg-secondary w-max hover:bg-primary"
    >
      <span className="h-full w-12 grid place-items-center bg-[#0000001A]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
          <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
            <path d="M0 9l8 4 8-4" />
            <path opacity=".5" d="M0 5l8 4 8-4" />
            <path opacity=".25" d="M0 1l8 4 8-4" />
          </g>
        </svg>
      </span>
      <span className="h-full w-[9.5rem] grid place-items-center text-[0.75rem] tracking-[0.125rem] text-neutral-50">
        {props.children}
      </span>
    </Link>
  );
};
