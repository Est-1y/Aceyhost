import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProperty from "../Property/FeaturedProperty";
import MoreProperty from "./MoreProperty";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";
import useFetch  from "../utils/useFetch";


function Property() {

  
  const {items} = useFetch()
  
  return (
    <div className="Property">
      <Header />
      <Hero header="Discover More suitable properties " />

      <SearchBar />
    
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Properties " items={items} />

      
      <Footer />
    </div>
  );
}

export default Property;
