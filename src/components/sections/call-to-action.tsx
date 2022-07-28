import { useId } from "react";
import { ActionLink } from "../buttons/action-link";

export function CallToActionSection() {
  const id = useId();

  return (
    <section
      aria-labelledby={id}
      className="mt-[7.1875rem] mb-20 md:my-24 xl:my-[9.375rem]"
    >
      <div className="container flex items-center flex-col gap-10 md:flex-row md:justify-between md:gap-8">
        <h2
          id={id}
          className="title-md text-neutral-800 max-w-[21.875rem] text-center md:text-left "
        >
          Interested in doing a project together?
        </h2>
        <div className="hidden md:block md:grow md:border md:border-[#33323D26]"></div>
        <div className="flex justify-center">
          <ActionLink type="secondary" router={true} to="/contact">
            CONTACT ME
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
