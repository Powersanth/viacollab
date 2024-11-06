import React from "react";
import BeliveIN from "../BeliveIN/BeliveIN";
import BrandFlow from "../BrandFlow/BrandFlow";
import MissionSlider from "../MissionSlider/MissionSlider";
import TeamSection from "../TeamSection/TeamSection";
import Testimonials from "../Testimonials/Testimonials";

export default function About() {
  return (
    <div>
      <MissionSlider />
      <TeamSection />
      <BrandFlow />
      <BeliveIN />
      {/* <Testimonials /> */}
    </div>
  );
}
