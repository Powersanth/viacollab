import React from "react";
import BeliveIN from "../BeliveIN/BeliveIN";
import BrandFlow from "../BrandFlow/BrandFlow";
import MissionSlider from "../MissionSlider/MissionSlider";
import TeamSection from "../TeamSection/TeamSection";
import Testimonials from "../Testimonials/Testimonials";
import Influencers from "../Influencers/Influencers";

export default function About() {
  return (
    <div>
      <MissionSlider />
      <TeamSection />
      <BrandFlow />
      <BeliveIN />
      <Influencers />
    </div>
  );
}
