import {
  HamburgerNavbar,
  Navbar,
  Startseite,
  SoHelfenWirIhnen,
  Abholtermine,
  UeberUns,
  Kontakt,
  Footer,
} from "./components/Sections";
import { WhatsAppFloatingButton } from "./components/UI";

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
