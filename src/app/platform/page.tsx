import PlatformHero from "@/components/platform/PlatformHero";
import PlatformOverview from "@/components/platform/PlatformOverview";
import PlatformModules from "@/components/platform/PlatformModules";
import PlatformWorkflow from "@/components/platform/PlatformWorkflow";
import PlatformReliability from "@/components/platform/PlatformReliability";
import PlatformCTA from "@/components/platform/PlatformCTA";

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformModules />
      <PlatformWorkflow />
      <PlatformReliability />
      <PlatformCTA />
    </>
  );
}
