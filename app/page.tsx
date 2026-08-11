import { Hero } from "@/components/hero";
import { FeaturedRecords } from "@/components/featured-records";
import { Manifesto } from "@/components/manifesto";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3efe6] text-[#171512] pt-24">
      <Hero />
      <FeaturedRecords />
      <Manifesto />
    </main>
  );
}
