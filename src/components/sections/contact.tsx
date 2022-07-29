import { useId } from "react";
import ContactForm from "../forms/contact-form";

export function ContactSection() {
  const id = useId();
  return (
    <section aria-labelledby={id} className="mt-8 mb-20 xl:mt-[2.9375rem] xl:mb-[6.8125rem]">
      <div className="container grid grid-cols-1 gap-6 xl:grid-cols-[21.875rem,39.6875rem] xl:justify-between">
        <h2 id={id} className="title-md text-neutral-800">
          Contact Me
        </h2>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
