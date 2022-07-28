export function AboutSection() {
  return (
    <section className="py-14" id="about">
      <div className="container grid grid-cols-1 md:grid-cols-[281fr,339fr] md:gap-[4.3125rem]">
        <picture className="relative pb-[111.2540193%] md:pb-[213.5231317%]">
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
        <header>
          <h2 className="mt-16 title-md text-neutral-800">About Me</h2>
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
        </header>
      </div>
    </section>
  );
}
