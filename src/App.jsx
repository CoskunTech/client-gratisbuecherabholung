import {
  HamburgerNavbar,
  Navbar,
  Startseite,
  SoHelfenWirIhnen,
  Abholtermine,
  UeberUns,
  Kontakt,
  Footer,
} from "./components/sections";
import { WhatsAppFloatingButton } from "./components/ui";

function App() {
  return (
    <>
      <Navbar />
      <HamburgerNavbar />
      <WhatsAppFloatingButton />
      <Startseite />
      <SoHelfenWirIhnen />
      <Abholtermine />
      <UeberUns />
      <Kontakt />
      <Footer />
    </>
  );
}

export default App;
