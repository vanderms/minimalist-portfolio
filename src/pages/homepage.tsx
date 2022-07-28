import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { CallToActionSection } from "@/components/sections/call-to-action";

export function Homepage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CallToActionSection />
    </main>
  );
}
