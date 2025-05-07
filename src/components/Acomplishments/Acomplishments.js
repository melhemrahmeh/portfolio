import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: "Job",
    text: "Land a Full time dev job in my junior year",
  },
  { number: "Honor List", text: "Placed on the Deans Honor List at AUB" },
  { number: "Scholarship", text: "Full scholarship covered by USAID." },
  { number: "20+", text: "Students Tutored (Math, Programming)" },
  { number: "2x AWS", text: "Earned 2 AWS certifications"},
  { number: "CKA", text: "Earned the Certified Kubernetes Administrator"}
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
