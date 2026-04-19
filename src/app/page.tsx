import { Hero } from "@/components/sections/Hero";
import { WasWirAbholen } from "@/components/sections/WasWirAbholen";
import { SoGehtEs } from "@/components/sections/SoGehtEs";
import { Abholtermine } from "@/components/sections/Abholtermine";
import { UeberUns } from "@/components/sections/UeberUns";
import { Gallery } from "@/components/sections/Gallery";
import { Kontakt } from "@/components/sections/Kontakt";

export default function Home() {
  return (
    <main>
      <Hero />
      <WasWirAbholen />
      <SoGehtEs />
      <Abholtermine />
      <UeberUns />
      <Gallery />
      <Kontakt />
    </main>
  );
}
