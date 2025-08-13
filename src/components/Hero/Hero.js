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
        Hello, I'm Melhem Rahmeh <br />
        Welcome!
      </SectionTitle>

      <SectionText>
        I am a Computer Science graduate from the American University of Beirut,
        and one of only 60 students in Lebanon to receive the prestigious USAID
        scholarship. I have a strong foundation in software development and a
        growing focus on DevOps and cloud engineering.
        <br />
        <br />
        Over the past 3+ years, I have built a diverse technical background,
        including roles as a Software Engineer at Asset Science, System Analyst
        at Maids.cc, and for the last 2 years, DevOps Engineer at Murex. I
        specialize in automating deployments, managing cloud infrastructure, and
        optimizing CI/CD pipelines.
        <br />
        <br />I am passionate about solving problems, streamlining processes,
        and delivering scalable, reliable solutions in dynamic environments.
      </SectionText>

      <Button
        onClick={() =>
          (window.location.href = 'https://www.linkedin.com/in/melhem-rahmeh/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
