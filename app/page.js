import React from "react";
import Hero from "./components/hero/index.js";
import Collaborators from "./components/collaborators/index.js";
import HiddenPower from "./components/hidden power/index.js";
import Wrapper from "./components/wrapper/index.js";
import CapnoTrainer from "./components/captoTrainerGo/index.js";
import UserExp from "./components/user experience/index.js";
import HowWeWork from "./components/howWeWork/index.js";
import Differece from "./components/difference/index.js";
import WeOffer from "./components/we offer/index.js";
import Success from "./components/success/index.js";
import KeyFeatures from "./components/key features/index.js";
import WhatWeCanDo from "./components/what we can do/index.js";
import Transform from "./components/transform/index.js";
import Footer from "./components/footer/index.js";
import FAQ from "./components/faq/index.js";
import Order from "./components/order/index.js";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Wrapper>
        <Collaborators />
        <HiddenPower />
      </Wrapper>
      <CapnoTrainer />
      <UserExp />
      <HowWeWork />
      <Wrapper>
        <Differece />
        <WeOffer />
      </Wrapper>
      <Success />
      <Wrapper>
        <KeyFeatures />
        <WhatWeCanDo />
      </Wrapper>
      <Order />
      <Wrapper>
        <FAQ />
        <Transform />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Home;
