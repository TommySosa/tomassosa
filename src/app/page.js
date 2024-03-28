import Contact from "./components/sections/Contact";
import CoverParticles from "./components/ui/CoverParticles";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Introduction from "./components/sections/Introduction";
import Navbar from "./components/ui/Navbar";
import Proyects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Technologies from "./components/sections/Technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Navbar />
      <CoverParticles />
      <Introduction />
      <Experience />
      <Education />
      <Technologies />
      <Services />
      <Proyects />
      <Contact />
      <Footer />
    </main>
  );
}
