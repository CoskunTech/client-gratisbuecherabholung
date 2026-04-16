import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloatingButton />
      <main className="pt-[72px]">
        <Hero />
      </main>
    </>
  );
}
