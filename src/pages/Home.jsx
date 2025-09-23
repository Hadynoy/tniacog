import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import Banner from "../components/Banner";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import RepentanceSteps from "@/components/RepentanceSteps";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <AboutPreview />
      <ServicesPreview />
      <RepentanceSteps/>
      <ContactPreview />
      <Footer />
    </>
  );
};

export default Home;
