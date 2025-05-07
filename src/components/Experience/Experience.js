import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
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
        return (
          <BlogCard key={i}>
            <TitleContent>
              <Img style={{ backgroundColor: "white" }} src={p.image} alt={p.company} />
              <Hr />
              <HeaderThree title>{p.title}</HeaderThree>
              <HeaderFour title>
                {p.company} | {p.date}
              </HeaderFour>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">
              <ul style={{ color: "white", paddingLeft: "20px" }}>
                {p.description.split("\n").map((item, index) => (
                  <li key={`${i}-${index}`} style={{ marginBottom: "8px" }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </CardInfo>
            <div>
              <Hr />
              {/* Uncomment if needed:
              <TagList>
                {p.tags.map((t, i) => (
                  <Tag key={i}>{t}</Tag>
                ))}
              </TagList>
              */}
            </div>
            {/* Uncomment if needed:
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
            */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Experience;