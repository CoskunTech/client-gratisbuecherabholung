import {
  HamburgerNavbar,
  Navbar,
  Startseite,
  SoHelfenWirIhnen,
  Abholtermine,
  UeberUns,
  Kontakt,
  Footer,
  WhatsAppFloatingButton,
} from "./components";

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
