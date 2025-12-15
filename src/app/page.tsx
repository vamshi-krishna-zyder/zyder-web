import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import WhoItsFor from "@/components/sections/WhoItsFor";
import HowItWorks from "@/components/sections/HowItWorks";
import Vision from "@/components/sections/Vision";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <WhoItsFor />
      <HowItWorks />
      <Vision />
      <CTA />
    </>
  );
}
