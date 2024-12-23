import React from "react";
import Header from "../Header/Header";
import Service from "./Service";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";
import Credibility from "./Credibility";
import Team from "./Team";

function About() {
  return (
    <div className=" About">
      <Header />
      <Service
        label="About Us"
        header="We Provide The Best Hosting Services For You"
        text="Discover the world with ease! At Aceyhost, we connect travelers with incredible stays and hosts with eager guests. Your journey begins here – where hospitality meets innovation.."
      />

      <SearchBar header="Let's Find A BnB That Meets Your Need" />
      <br className=""></br>
      <Credibility header="Why Trust Us" text="We Guarantee Quality Delivery" />
      <Team header="Our Team" text="Meet Our Amazing Team" />
      <Footer />
    </div>
  );
}

export default About;
