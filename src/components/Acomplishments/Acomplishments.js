import React from 'react';
import { FiAward, FiGlobe, FiStar } from 'react-icons/fi';

import {
  Band,
  Box,
  BoxNum,
  BoxText,
  Boxes,
  Note,
  NoteRow,
} from './AcomplishmentsStyles';
import {
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';

/* Metrics only — everything here is a comparable number. */
const metrics = [
  { number: '10M+', text: 'Daily requests served by gateways I run' },
  { number: '300+', text: 'APIs migrated to Envoy Gateway' },
  { number: '99.999%', text: 'Availability on a multi-cloud banking platform' },
  { number: '1,500+', text: 'Support tickets resolved at Murex' },
  { number: '4+', text: 'Years building software and infrastructure' },
  { number: '30+', text: 'Services moved off Kubernetes Ingress' },
  { number: '15x', text: 'Speed-up on a critical batch operation' },
  { number: '10+', text: 'Kubernetes clusters operated in production' },
];

/* Non-numeric credentials live outside the metric grid. */
const notes = [
  { icon: <FiAward size="1rem" />, text: 'CKA + 3 AWS certifications' },
  {
    icon: <FiStar size="1rem" />,
    text: 'USAID full scholarship — 1 of 60 in Lebanon',
  },
  {
    icon: <FiGlobe size="1rem" />,
    text: 'English · Arabic · French · Greek',
  },
];

const Acomplishments = () => (
  <Section id="achievements">
    <Reveal>
      <Eyebrow>By the numbers</Eyebrow>
      <SectionTitle>Achievements</SectionTitle>
      <SectionText>
        A few things worth measuring from the last four years.
      </SectionText>
    </Reveal>

    <Reveal delay={80}>
      <Band>
        <Boxes>
          {metrics.map((card) => (
            <Box key={card.number + card.text}>
              <BoxNum>{card.number}</BoxNum>
              <BoxText>{card.text}</BoxText>
            </Box>
          ))}
        </Boxes>

        <NoteRow>
          {notes.map((note) => (
            <Note key={note.text}>
              {note.icon}
              {note.text}
            </Note>
          ))}
        </NoteRow>
      </Band>
    </Reveal>
  </Section>
);

export default Acomplishments;
