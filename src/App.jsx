import { useState } from 'react';
import './App.css';
import Accordion from "./components/portfolio-accordion";
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar";

const App = () => {

  return (
    <>
      <Navbar/>
      <h1>EMMA BARNETT</h1>
      <Wrapper>
        <h2>PORTFOLIO</h2>
      <Accordion title="WEB DEVELOPMENT & DESIGN" content="This is content 1."/>
      <Accordion title="USER EXPERIENCE DESIGN" content="This is content 2."/>
      <Accordion title="PHOTOGRAPHY" content="Photography"/>
      <Accordion title="ILLUSTRATIONS" content="Art I've done"/>
      </Wrapper>

      <Wrapper>
        <h2>RESUME</h2>
        <Accordion title="EDUCATION" content="Education content"/>
        <Accordion title="WORK EXPERIENCE" content="Work experience"/>
        <Accordion title="VOLUNTEERING" content="Voluteering experience"/>
      </Wrapper>
    </>
  );
};

export default App;
