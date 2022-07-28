import { Link } from "react-router-dom";
import { Project } from "@/hooks/use-projects";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

export const ProjectNavegationSection: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <nav aria-label="secondary" className="mt-16 md:mt-20 xl:mt-16">
      <ol className="container grid grid-cols-2 items-center justify-between border-y border-neutral-150">
        <li className="py-6 border-r border-neutral-150 md:py-8">
          <Link to={`/portfolio/${project.prev.toLowerCase()}`}>
            <article className="w-max flex flex-col gap-4 items-start md:flex-row md:items-center md:gap-8">
              <MdOutlineArrowBackIosNew />
              <header>
                <h2 className="title-sm text-neutral-800 hover:underline">{project.prev}</h2>
                <p className="body-md text-neutral-500">Previous Project</p>
              </header>
            </article>
          </Link>
        </li>

        <li className="py-6 md:py-8 flex md:justify-end">
          <Link to={`/portfolio/${project.next.toLowerCase()}`}>
            <article className="w-max flex flex-col gap-4 items-end md:flex-row-reverse md:items-center md:gap-8 ">
              <MdOutlineArrowForwardIos />
              <header>
                <h2 className="title-sm text-neutral-800 hover:underline">{project.next}</h2>
                <p className="body-md text-neutral-500">Next Project</p>
              </header>
            </article>
          </Link>
        </li>
      </ol>
    </nav>
  );
};
