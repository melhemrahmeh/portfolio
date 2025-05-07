import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm Melhem Rahmeh, <br />
        And welcome there!
      </SectionTitle>
      <SectionText>
        Computer Science graduate from the American University of Beirut with a
        strong foundation in Full Stack Development, new technologies and tools.
        I have been honing my skills since high school and am proud to be among
        the 60 high school graduates in Lebanon to receive the prestigious USAID
        scholarship for undergraduate studies at AUB.
        <br /> I did 2 web development internships and landed 2 professional
        jobs as a Software Engineer and then as a Business Analyst during my
        university years, culminating in a successful transition to Murex as a
        DevOps Engineer post-graduation.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://www.linkedin.com/in/melhem-rahmeh/')
        }
      >
        {' '}
        Learn More{' '}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
