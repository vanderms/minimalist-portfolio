import { useId } from "react";
import { SocialMediaItem } from "../layout/footer";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export function GetInTouch() {
  const id = useId();
  return (
    <section aria-labelledby={id} className="mt-10 md:mt-24 ">
      <div className={`container pt-6 pb-8 border-y border-neutral-150 grid grid-cols-1 
        xl:py-12 xl:grid-cols-[21.875rem,39.6875rem] xl:justify-between
      `}>
        <h1 id={id} className="title-md text-neutral-800">
          Get in Touch
        </h1>
        <div>
          <p className="mt-6 body-md text-neutral-500 xl:mt-0">
            I&apos;d love to hear about what you&apos;re working on and how I could help.
            I&apos;m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a company in London.
            But I&apos;m also happy to hear about opportunites that don&apos;t fit that
            description. I&apos;m a hard-working and positive person who will always
            approach each task with a sense of purpose and attention to detail. Please do
            feel free to check out my online profiles below and get in touch using the form.
          </p>
          <ul className="mt-6 flex items-center gap-4">
            <SocialMediaItem href="https://www.github.com" aria="github">
              <FaGithubSquare className="text-neutral-800 w-6 h-6" />
            </SocialMediaItem>
            <SocialMediaItem href="https://www.twitter.com" aria="twitter">
              <FaTwitterSquare className="text-neutral-800 w-6 h-6" />
            </SocialMediaItem>
            <SocialMediaItem href="https://www.linkedin.com" aria="linkedin">
              <FaLinkedin className="text-neutral-800 w-6 h-6" />
            </SocialMediaItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
