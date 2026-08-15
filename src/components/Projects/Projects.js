import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import {
  Card,
  CardBody,
  Description,
  GridContainer,
  LinkRow,
  ProjectLink,
  TagList,
  Thumb,
  Title,
} from './ProjectsStyles';
import {
  Chip,
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <Reveal>
      <Eyebrow>Things I&apos;ve built</Eyebrow>
      <SectionTitle>Projects</SectionTitle>
      <SectionText>
        Side projects, freelance work, and university builds — from full-stack
        web apps to machine learning experiments.
      </SectionText>
    </Reveal>

    <GridContainer>
      {projects.map((project, index) => (
        <Reveal key={project.id} as="li" delay={(index % 3) * 70}>
          <Card>
            <Thumb>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
            </Thumb>
            <CardBody>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>

              <TagList>
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Chip>{tag}</Chip>
                  </li>
                ))}
              </TagList>

              <LinkRow>
                {project.visit && (
                  <ProjectLink
                    $primary
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink aria-hidden="true" /> Live demo
                  </ProjectLink>
                )}
                {project.source && (
                  <ProjectLink
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub aria-hidden="true" /> Source
                  </ProjectLink>
                )}
              </LinkRow>
            </CardBody>
          </Card>
        </Reveal>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
