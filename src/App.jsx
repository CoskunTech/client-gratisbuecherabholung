import "./App.css";
import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar";
import Container from "./components/layout/Container";
import HowItWorks from "./components/sections/HowItWorks";
import ScrollUp from "./components/common/ScrollUp";
import WhoAreWe from "./components/sections/WhoAreWe";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <HowItWorks />
        <WhoAreWe />
        <Contact />
      </Container>
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
