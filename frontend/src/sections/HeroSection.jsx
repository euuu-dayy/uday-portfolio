import { lazy, Suspense } from "react";
const HeroCanvas = lazy(() => import("../components/hero/HeroCanvas"));
import HeroContent from "../components/hero/HeroContent";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0f172a] to-[#050816] overflow-hidden" />

      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <HeroContent />
    </section>
  );
};

export default HeroSection;
