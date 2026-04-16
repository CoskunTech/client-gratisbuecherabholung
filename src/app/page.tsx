import { Hero } from "@/components/sections/Hero";
import { SoGehtEs } from "@/components/sections/SoGehtEs";
import { Abholtermine } from "@/components/sections/Abholtermine";
import { Zahlen } from "@/components/sections/Zahlen";
import { UeberUns } from "@/components/sections/UeberUns";
import { Kundenstimmen } from "@/components/sections/Kundenstimmen";
import { Kontakt } from "@/components/sections/Kontakt";

export default function Home() {
  return (
    <main className="pt-[72px]">
      <Hero />
      <SoGehtEs />
      <Abholtermine />
      <Zahlen />
      <UeberUns />
      <Kundenstimmen />
      <Kontakt />
    </main>
  );
}
