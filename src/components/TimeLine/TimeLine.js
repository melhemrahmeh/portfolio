import React from 'react';

import {
  Node,
  Rail,
  RailHint,
  RailWrap,
  Stop,
  StopHead,
  StopText,
  Year,
} from './TimeLineStyles';
import {
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => (
  <Section id="about">
    <Reveal>
      <Eyebrow>The short version</Eyebrow>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I started out writing C++ at AUB and ended up running production
        infrastructure for a living. Today I&apos;m a DevOps Engineer at FxPro
        in Limassol, working across AWS, Azure, Kubernetes, and Terraform — and
        I still enjoy the software side enough to keep shipping side projects.
      </SectionText>
    </Reveal>

    <Reveal delay={80}>
      <RailWrap>
        <Rail>
          {TimeLineData.map((item, index) => {
            const last = index === TimeLineData.length - 1;
            return (
              <Stop key={item.year}>
                <StopHead>
                  <Node $last={last} aria-hidden="true" />
                  <Year $last={last}>{item.year}</Year>
                </StopHead>
                <StopText>{item.text}</StopText>
              </Stop>
            );
          })}
        </Rail>
      </RailWrap>
      <RailHint>← scroll the timeline →</RailHint>
    </Reveal>
  </Section>
);

export default Timeline;
