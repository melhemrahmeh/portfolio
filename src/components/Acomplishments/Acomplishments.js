import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {
    number: 'Job',
    text: 'Land a Full time dev job in my junior year',
  },
  { number: 'Honor List', text: 'Placed on the Deans Honor List at AUB' },
  { number: 'Scholarship', text: 'Full scholarship covered by USAID.' },
  { number: '2x AWS', text: 'Earned 2 AWS certifications' },
  { number: 'CKA', text: 'Earned the Certified Kubernetes Administrator' },
  { number: 'DevOps', text: '2+ years of DevOps experience' },
  { number: '3+', text: 'Years of Software Development Experience' },
  { number: '4', text: 'Languages Spoken (English, Arabic, French, Greek)' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
