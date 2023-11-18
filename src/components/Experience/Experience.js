import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  HeaderFive,
  HeaderFour,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";

const Experience = () => (
  <Section nopadding id="experience">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <GridContainer>
      {experience.map((p, i) => {
        const bulletPoints = p.description
          .split("\n")
          .map((item, index) => <li key={index}>{item}</li>);

        return (
          <BlogCard key={i}>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <HeaderFour title>
                {p.company}  |  {p.date}
              </HeaderFour>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">
              <ul style={{ color: "white" }}>{bulletPoints}</ul>
            </CardInfo>
            <div>
              <Hr />
              {/* <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList> */}
            </div>
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Experience;
