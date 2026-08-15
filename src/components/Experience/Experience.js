import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import {
  CurrentTag,
  Dates,
  EarlierWrap,
  Entry,
  Highlight,
  HighlightLabel,
  Highlights,
  Meta,
  Node,
  Panel,
  Role,
  TagList,
  ToggleButton,
  TopRow,
  Track,
} from './ExperienceStyles';
import {
  Chip,
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { experience } from '../../constants/constants';

/** The two most recent roles carry the detail; older ones are summarised. */
const FEATURED_COUNT = 2;

const initialOf = (company) => company.charAt(0).toUpperCase();

const Row = ({ job, compact }) => (
  <Entry $compact={compact}>
    <Node $compact={compact} $current={job.current} aria-hidden="true">
      {initialOf(job.company)}
    </Node>

    <Panel $compact={compact}>
      <TopRow>
        <div>
          <Role $compact={compact}>
            {job.title}
            {job.current && <CurrentTag>Current</CurrentTag>}
          </Role>
          <Meta $compact={compact}>
            {job.company} <span>· {job.location}</span>
          </Meta>
        </div>
        <Dates>{job.date}</Dates>
      </TopRow>

      {!compact && (
        <>
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
        </>
      )}
    </Panel>
  </Entry>
);

const Experience = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  const featured = experience.slice(0, FEATURED_COUNT);
  const earlier = experience.slice(FEATURED_COUNT);

  return (
    <Section id="experience">
      <Reveal>
        <Eyebrow>Where I&apos;ve worked</Eyebrow>
        <SectionTitle>Experience</SectionTitle>
        <SectionText>
          Four years of building and running infrastructure — from Kubernetes
          platforms and Terraform-managed multi-cloud estates to the CI/CD
          pipelines and gateways that keep them shipping.
        </SectionText>
      </Reveal>

      <Reveal delay={80}>
        <Track>
          {featured.map((job) => (
            <Row key={job.id} job={job} compact={false} />
          ))}

          {showEarlier &&
            earlier.map((job) => <Row key={job.id} job={job} compact={true} />)}
        </Track>

        <EarlierWrap>
          <ToggleButton
            type="button"
            $open={showEarlier}
            aria-expanded={showEarlier}
            onClick={() => setShowEarlier((open) => !open)}
          >
            {showEarlier
              ? 'Hide earlier roles'
              : `Show ${earlier.length} earlier roles (2022 – 2023)`}
            <FiChevronDown aria-hidden="true" />
          </ToggleButton>
        </EarlierWrap>
      </Reveal>
    </Section>
  );
};

export default Experience;
