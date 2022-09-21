import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm Melhem Rahmeh, <br />
        And welcome there!
      </SectionTitle>
      <SectionText>
        Being a tech enthusiast since a young age, I started learning to program
        in High school then chose to major in Computer Science in college.{" "}
        <br /> <br />I am highly interested in Software Engineering, and
        currently strengthening my Web Development and Software Engineering
        practices, and looking into Machine Learning. <br /> <br /> I am a
        Software Developer at Asset Science LLC working with React, Redux,
        Electron and C++.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/melhem-rahmeh/")
        }
      >
        {" "}
        Learn More{" "}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
