import { TracingBeam } from "@/components/ui/tracing-beam";
import Cta from "./components/Cta";
import { HeroSection } from "./components/Hero";
import PreviousJobs from "./components/jobs";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TracingBeam className="px-6">
        <Cta />
        <Skills />
        <PreviousJobs />
      </TracingBeam>
    </main>
  );
}
