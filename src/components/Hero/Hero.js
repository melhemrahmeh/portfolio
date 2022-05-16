import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding id="about">
    <LeftSection>
      <SectionTitle main center>
        Hello I'm Melhem Rahmeh, <br />
        And welcome there!
      </SectionTitle>
      <SectionText >
        Being a tech enthusiast since a young age, I started learning to program in High school then chose to major in Computer Science in college. <br /> <br />
        I am highly interested in Software Engineering, as I see it as my future path, and currently strengthening my Web Development and Software Engineering practices, and looking into Machine Learning.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/melhem-rahmeh/' }> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;