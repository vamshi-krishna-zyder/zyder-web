import CareersHero from "@/components/careers/CareersHero";
import CareersBenefits from "@/components/careers/CareersBenefits";
import CareersValues from "@/components/careers/CareersValues";
import CareersRoles from "@/components/careers/CareersRole";
import CareersCTA from "@/components/careers/CareersCTA";

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersValues />
      <CareersBenefits />
      <CareersRoles />
      <CareersCTA />
    </>
  );
}
