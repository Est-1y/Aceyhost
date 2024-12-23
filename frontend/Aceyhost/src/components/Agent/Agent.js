import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MoreProperty from "../Property/MoreProperty";
import SearchBar from "../utils/SearchBar";
// imports
import ExpertSection from "../utils/ExpertSection";

function Agent() {
  return (
    <div className="Agent">
      <Header />
      <Hero header="Our expert agents are here to support your hosting needs and help achieve your goals." />

      <ExpertSection
        header="Meet Expert Agents"
        text="We have certified experts available to assist you with all your hosting needs."
      />
      <SearchBar />
      <MoreProperty
        header="Properties"
        text="Find More BnBs that meets your need"
      />
      {/* <FeaturedProperty
        header="Featured Properties"
        text="Top Rated Properties"
      /> */}
      <div className="mt-20"></div>
      <Footer />
    </div>
  );
}

export default Agent;
