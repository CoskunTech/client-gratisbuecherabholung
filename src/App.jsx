import {
  HamburgerNavbar,
  Navbar,
  Startseite,
  SoHelfenWirIhnen,
  Abholtermine,
  UeberUns,
  Kontakt,
  Footer,
} from "./components";
import WhatsAppFloatingButton from "./components/UI/WhatsAppFloatingButton";

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
