import { ActionLink } from "../buttons/action-link";
import { useId } from "react";

export function AboutSection() {
  const id = useId();

  return (
    <section className="pt-14 md:pt-24 xl:mt-[3.375rem]" id="about" aria-labelledby={id}>
      <div className="container grid grid-cols-1 md:grid-cols-[281fr,339fr] md:gap-[4.3125rem] xl:grid-cols-[33.75rem,21.25rem] xl:gap-[7.8125rem]">
        <picture className="relative pb-[111.2540193%] md:pb-[213.5231317%] xl:pb-[111.1111111%]">
          <source
            media="(min-width: 74rem)"
            srcSet="/assets/homepage/desktop/image-homepage-profile@2x.jpg"
          />
          <source
            media="(min-width:45rem)"
            srcSet="/assets/homepage/tablet/image-homepage-profile@2x.jpg"
          />
          <img
            src="/assets/homepage/mobile/image-homepage-profile@2x.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
        </picture>
        <header className="py-8 mt-8 border-y border-[#33323D26] md:mt-0 md:py-[3.125rem] xl:pb-[2.875rem]">
          <h2 id={id} className="title-md text-neutral-800">
            About Me
          </h2>
          <p className="body-md text-neutral-500 mt-7">
            I&apos;m a junior front-end developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS practices and
            writing clean JavaScript. When writing JavaScript code, I mostly use React, but
            I can adapt to whatever tools are required. I&apos;m based in London, UK, but
            I&apos;m happy working remotely and have experience in remote teams. When
            I&apos;m not coding, you&apos;ll find me outdoors. I love being out in nature
            whether that&apos;s going for a walk, run or cycling. I&apos;d love you to check
            out my work.
          </p>
          <div className="mt-6">
            <ActionLink type="secondary" router={true} to="/portfolio">
              GO TO PORTFOLIO
            </ActionLink>
          </div>
        </header>
      </div>
    </section>
  );
}
