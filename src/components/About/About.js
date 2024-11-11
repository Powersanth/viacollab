import React from "react";
import BeliveIN from "../BeliveIN/BeliveIN";
import BrandFlow from "../BrandFlow/BrandFlow";
import MissionSlider from "../MissionSlider/MissionSlider";
import Partnership from "../Partnership/Partnership";
import TeamSection from "../TeamSection/TeamSection";
import Testimonials from "../Testimonials/Testimonials";
import ContactPage from "../ContactPage/ContactPage";

export default function About() {
  return (
    <div>
      <MissionSlider />
      <TeamSection />
      <BrandFlow />
      <BeliveIN />
      <Partnership />
      <ContactPage />
    </div>
  );
}
