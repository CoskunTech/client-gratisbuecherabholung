import "./App.css";
import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar";
import Container from "./components/layout/Container";
import HowItWorks from "./components/sections/HowItWorks";
import ScrollUp from "./components/common/ScrollUp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <HowItWorks />
      </Container>
      <ScrollUp />
    </>
  );
}

export default App;
