import React from 'react';
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
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';

const Experience = () => (
  <Section nopadding id="experience">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <GridContainer>
      {experience.map((p, i) => {
        // Filter out empty lines from description
        const descriptionItems = p.description
          .split('\n')
          .filter((item) => item.trim() !== '');

        return (
          <BlogCard key={`exp-${i}-${p.company.replace(/\s+/g, '-')}`}>
            <TitleContent>
              {p.image && (
                <Img
                  style={{ backgroundColor: 'white' }}
                  src={p.image}
                  alt={`${p.company} logo`}
                  loading="lazy"
                />
              )}
              <Hr />
              <HeaderThree title>{p.title}</HeaderThree>
              <HeaderFour title>
                {p.company} | {p.date}
              </HeaderFour>
              <Hr />
            </TitleContent>

            <CardInfo className="card-info">
              {descriptionItems.length > 0 ? (
                <ul
                  style={{
                    color: 'white',
                    paddingLeft: '20px',
                    listStyleType: 'none',
                    margin: 0,
                  }}
                >
                  {descriptionItems.map((item, index) => (
                    <li
                      key={`desc-${i}-${index}`}
                      style={{
                        marginBottom: '8px',
                        position: 'relative',
                        paddingLeft: '1rem',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                        }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: 'white' }}>No description provided</p>
              )}
            </CardInfo>

            <div>
              <Hr />
              {p.tags?.length > 0 && (
                <TagList>
                  {p.tags.map((t, i) => (
                    <Tag key={`tag-${i}-${t.replace(/\s+/g, '-')}`}>{t}</Tag>
                  ))}
                </TagList>
              )}
            </div>

            {(p.visit || p.source) && (
              <UtilityList>
                {p.visit && (
                  <ExternalLinks
                    href={p.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </ExternalLinks>
                )}
                {p.source && (
                  <ExternalLinks
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </ExternalLinks>
                )}
              </UtilityList>
            )}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Experience;
