import { Link } from "react-router-dom";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const LinkItem: React.FC<{ to: string; children: React.ReactNode }> = (props) => {
  return (
    <li className="contents">
      <Link
        to={props.to}
        className={`text-[0.75rem] leading-[0.875rem] tracking-[0.125rem] text-neutral-50 hover:underline`}
      >
        {props.children}
      </Link>
    </li>
  );
};

export const SocialMediaItem: React.FC<{
  href: string;
  aria: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <li className="contents">
      <a
        href={props.href}
        aria-label={props.aria}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    </li>
  );
};

export function Footer() {
  return (
    <footer className="bg-neutral-800 py-14 md:py-6">
      <div className="container flex flex-col gap-10 items-center md:flex-row md:justify-between md:gap-12">
        <Link to="/" aria-label="Homepage">
          <img
            src="/assets/logo.svg"
            alt=""
            className="[filter:brightness(0%)_invert(100%)]"
          />
        </Link>
        <ul className="flex flex-col items-center gap-8 md:flex-row md:grow md:gap-[2.6563rem]">
          <LinkItem to="/">HOME</LinkItem>
          <LinkItem to="/portfolio">PORTFOLIO</LinkItem>
          <LinkItem to="/contact">CONTACT ME</LinkItem>
        </ul>
        <ul className="flex items-center gap-4">
          <SocialMediaItem href="https://www.github.com" aria="github">
            <FaGithubSquare className="text-neutral-50 w-6 h-6" />
          </SocialMediaItem>
          <SocialMediaItem href="https://www.twitter.com" aria="twitter">
            <FaTwitterSquare className="text-neutral-50 w-6 h-6" />
          </SocialMediaItem>
          <SocialMediaItem href="https://www.linkedin.com" aria="linkedin">
            <FaLinkedin className="text-neutral-50 w-6 h-6" />
          </SocialMediaItem>
        </ul>
      </div>
    </footer>
  );
}
