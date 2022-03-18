import React, { Component } from 'react';
import FirHeader from "./component_1/header-fir";
import SecHeader from "./component_1/header-sec";
import InputFir from "./component_1/input-fir";
import SectionFir from "./component_1/section-fir";
import SectionSec from "./component_1/section-sec";
import SectionThir from "./component_1/section-thir";
import SectionFourth from "./component_1/section-fourth";
import FooterFir from "./component_1/footer-fir";
import FooterSec from "./component_1/footer-sec";
import FooterThir from "./component_1/footer-thir";
import FooterFourth from './component_1/footer-fourth';

import './App.css';

function App() {
  return (
    <div className="App">
      <FirHeader></FirHeader>
      <SecHeader></SecHeader>
      <hr></hr>
      <InputFir></InputFir>
      <hr></hr>
      <SectionFir></SectionFir>
      <SectionSec></SectionSec>
      <SectionThir></SectionThir>
      <SectionFourth></SectionFourth>
      <hr></hr>
      <FooterFir></FooterFir>
      <FooterSec></FooterSec>
      <FooterThir></FooterThir>
      <FooterFourth></FooterFourth>
      

    </div>
  );
}

export default App;
