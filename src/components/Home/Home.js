// Home.js
import "../../App.css";
import ConnectInFluencers from "../ConnectInFluencers/ConnectInFluencers";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import GrabOnly from "../GrabOnly/GrabOnly";
import CompanyNumbers from "../CompanyNumbers/CompanyNumbers";
import HowItWorks from "../HowItWorks/HowItWorks";
import FrequentlyQandA from "../FrequentlyQandA/FrequentlyQandA";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

function Home() {
  return (
    <section className="hero">
      <NavBar linkColor="#000" gradientBackground={true} />
      <LandingPage />
      <ConnectInFluencers />
      <GrabOnly />
      <CompanyNumbers />
      <HowItWorks />
      <FrequentlyQandA />
      <WhyChooseUs />
    </section>
  );
}

export default Home;
