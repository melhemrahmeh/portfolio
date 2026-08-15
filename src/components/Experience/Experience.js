import React from 'react';

import {
  Card,
  CardHeader,
  Company,
  DateBadge,
  DateInline,
  HeaderText,
  Highlight,
  HighlightLabel,
  Highlights,
  Logo,
  Role,
  TagList,
  CardList,
} from './ExperienceStyles';
import {
  Chip,
  Eyebrow,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <Eyebrow>Where I&apos;ve worked</Eyebrow>
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      Four years of building and running infrastructure — from Kubernetes
      platforms and Terraform-managed multi-cloud estates to the CI/CD pipelines
      and gateways that keep them shipping.
    </SectionText>

    <CardList>
      {experience.map((job) => (
        <Card key={job.id} $current={job.current}>
          <CardHeader>
            {job.image && (
              <Logo>
                <img
                  src={job.image}
                  alt={`${job.company} logo`}
                  loading="lazy"
                />
              </Logo>
            )}
            <HeaderText>
              <Role>{job.title}</Role>
              <Company>
                {job.company} <span>· {job.location}</span>
              </Company>
              <DateInline>{job.date}</DateInline>
            </HeaderText>
            <DateBadge>{job.date}</DateBadge>
          </CardHeader>

          <Highlights>
            {job.highlights.map((item) => (
              <Highlight key={item.label}>
                <HighlightLabel>{item.label}:</HighlightLabel> {item.text}
              </Highlight>
            ))}
          </Highlights>

          {job.tags?.length > 0 && (
            <TagList>
              {job.tags.map((tag) => (
                <li key={tag}>
                  <Chip>{tag}</Chip>
                </li>
              ))}
            </TagList>
          )}
        </Card>
      ))}
    </CardList>
  </Section>
);

export default Experience;
