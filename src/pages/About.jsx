import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import WhyCreated from "../Components/WhyCreated/WhyCreated";
import LearnSection from "../Components/LearnSection/LearnSection";
import HowWeTeach from "../Components/HowWeTeach/HowWeTeach";
import WhoFor from "../Components/WhoFor/WhoFor";
import WhatMakesUsDifferent from "../Components/WhatMakesUsDifferent/WhatMakesUsDifferent";
import Vision from "../Components/Vision/Vision";
import Mission from "../Components/Mission/Mission";
import Footer from "../Components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <WhyCreated />
        <LearnSection />
        <HowWeTeach />
        <WhoFor />
        <WhatMakesUsDifferent />
        <Vision />
        <Mission />
      </main>
      <Footer />
    </>
  );
}

export default About;

