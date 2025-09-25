import React from "react";
import Header from "../components/Header";
import TextNavigationSlider from "./Services";
import Contactsection from "../components/Contact";
import Teammember from "../components/Team";
import Successsection from "../components/Successsection";
import State from "../components/State";
import Contactstate from "../components/Contactstate";
import Aboutus from "../components/Aboutus";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <TextNavigationSlider />
      <Contactstate />
      <Aboutus />
      <State />
      <Teammember />
      <Successsection />
      <Contactsection />
    </div>
  );
};

export default Home;
