import React from "react";
import { Link } from "react-router-dom";

interface Props {
  type: "primary" | "secondary";
  router: boolean;
  to: string;
  children: React.ReactNode;
  blank?: boolean;
}

const PrimaryStructure: React.FC<Props> = (props) => {
  return (
    <>
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
    </>
  );
};

const PrimaryLink: React.FC<Props> = (props) => {
  if (props.router) {
    return (
      <Link
        to={props.to}
        className="flex items-center h-12 bg-secondary w-max hover:bg-primary"
      >
        <PrimaryStructure {...props} />
      </Link>
    );
  }
  return (
    <a
      href={props.to}
      className="flex items-center h-12 bg-secondary w-max hover:bg-primary"
    >
      <PrimaryStructure {...props} />
    </a>
  );
};

const SecondaryLink: React.FC<Props> = (props) => {
  const target = {
    target: props.blank ? "_blank" : undefined,
    rel: props.blank ? "noopener noreferrer" : undefined,
  };

  if (props.router) {
    return (
      <Link
        to={props.to}
        className="h-12 w-max px-9 flex items-center text-[0.75rem] text-neutral-800 border border-neutral-800 hover:bg-neutral-800 hover:text-neutral-50"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <a
      href={props.to}
      className="h-12 w-max px-9 flex items-center text-[0.75rem] text-neutral-800 border border-neutral-800 hover:bg-neutral-800 hover:text-neutral-50"
      {...target}
    >
      {props.children}
    </a>
  );
};

export const ActionLink: React.FC<Props> = (props) => {
  return props.type === "primary" ? (
    <PrimaryLink {...props} />
  ) : (
    <SecondaryLink {...props} />
  );
};
