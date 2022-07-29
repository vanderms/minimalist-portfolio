import { useId } from "react";
import { ActionLink } from "../buttons/action-link";

export function HeroSection() {
  const id = useId();
  return (
    <section aria-labelledby={id} className="pt-10 xl:pt-[3.375rem]">
      <div className="relative container grid grid-cols-1">
        <picture className="relative pb-[87.1382637%] xl:pb-[54.0540541%]">
          <source
            media="(min-width: 74rem)"
            srcSet="/assets/homepage/desktop/image-homepage-hero@2x.jpg"
          />
          <source
            media="(min-width:45rem)"
            srcSet="/assets/homepage/tablet/image-homepage-hero@2x.jpg"
          />
          <img
            src="/assets/homepage/mobile/image-homepage-hero@2x.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
        </picture>
        <header className="md:absolute md:bottom-0 md:left-0 md:bg-neutral-100 md:w-[32.125rem] md:pt-14 md:pr-14 xl:w-[27.8125rem]">
          <h1 id={id} className="mt-6 title-md md:mt-0 xl:title-xl text-neutral-800">
            Hey, I&apos;m Alex Spencer and I love building beautiful websites
          </h1>
          <div className="mt-8 md:mt-12 xl:mt-[3.3125rem]">
            <ActionLink to="#about" type="primary" router={false}>
              ABOUT ME
            </ActionLink>
          </div>
        </header>
      </div>
    </section>
  );
}
