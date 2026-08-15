import React from 'react';

import {
  Eyebrow,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, BoxNum, BoxText, Boxes } from './AcomplishmentsStyles';

const data = [
  { number: '4+', text: 'Years building software and infrastructure' },
  { number: '10M+', text: 'Daily requests served by gateways I run' },
  { number: '300+', text: 'APIs migrated to Envoy Gateway' },
  { number: '99.999%', text: 'Availability on a multi-cloud banking platform' },
  { number: '1,500+', text: 'Support tickets resolved at Murex' },
  { number: '4x', text: 'Cloud certifications (CKA + 3 AWS)' },
  { number: 'USAID', text: 'Full scholarship — 1 of 60 students in Lebanon' },
  { number: '4', text: 'Languages spoken (English, Arabic, French, Greek)' },
];

const Acomplishments = () => (
  <Section id="achievements">
    <SectionDivider />
    <Eyebrow>By the numbers</Eyebrow>
    <SectionTitle>Achievements</SectionTitle>
    <SectionText>
      A few things worth measuring from the last four years.
    </SectionText>
    <Boxes>
      {data.map((card) => (
        <Box key={card.number}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
