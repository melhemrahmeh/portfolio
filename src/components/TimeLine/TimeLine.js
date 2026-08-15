import React from 'react';

import { ItemText, TimelineGrid, TimelineItem, Year } from './TimeLineStyles';
import {
  Eyebrow,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => (
  <Section id="about">
    <SectionDivider $colorAlt />
    <Eyebrow>The short version</Eyebrow>
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I started out writing C++ at AUB and ended up running production
      infrastructure for a living. Today I&apos;m a DevOps Engineer at FxPro in
      Limassol, working across AWS, Azure, Kubernetes, and Terraform — and I
      still enjoy the software side enough to keep shipping side projects.
    </SectionText>

    <TimelineGrid>
      {TimeLineData.map((item) => (
        <TimelineItem key={item.year}>
          <Year>{item.year}</Year>
          <ItemText>{item.text}</ItemText>
        </TimelineItem>
      ))}
    </TimelineGrid>
  </Section>
);

export default Timeline;
