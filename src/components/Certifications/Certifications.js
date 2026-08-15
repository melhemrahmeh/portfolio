import React from 'react';
import { SiAmazonwebservices, SiKubernetes } from 'react-icons/si';
import { FiCode, FiExternalLink, FiLayers, FiServer } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';

import {
  CertBody,
  CertIssuer,
  CertLink,
  CertList,
  CertMark,
  CertName,
  CertRow,
  EducationCard,
  EducationIcon,
  EducationText,
  VerifyIcon,
} from './CertificationsStyles';
import {
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { certifications } from '../../constants/constants';

/** Vendor marks in their own brand colours, keyed off `kind`. */
const marks = {
  kubernetes: { icon: <SiKubernetes size="1.25rem" />, color: '#326CE5' },
  aws: { icon: <SiAmazonwebservices size="1.25rem" />, color: '#FF9900' },
  infra: { icon: <FiServer size="1.15rem" />, color: '#13ADC7' },
  systems: { icon: <FiLayers size="1.15rem" />, color: '#945DD6' },
  algo: { icon: <FiCode size="1.15rem" />, color: '#F46737' },
};

const Certifications = () => (
  <Section id="certifications">
    <Reveal>
      <Eyebrow>Education & credentials</Eyebrow>
      <SectionTitle>Certifications</SectionTitle>
      <SectionText>
        Formal proof of the things I work on daily — Kubernetes, AWS, and system
        design. Every credential below links to its verification page.
      </SectionText>
    </Reveal>

    <Reveal delay={80}>
      <EducationCard>
        <EducationIcon aria-hidden="true">
          <IoSchoolOutline size="1.4rem" />
        </EducationIcon>
        <EducationText>
          <h3>American University of Beirut (AUB)</h3>
          <p>
            Bachelor of Science in Computer Science · USAID full scholarship ·
            Dean&apos;s Honor List
          </p>
        </EducationText>
      </EducationCard>

      <CertList>
        {certifications.map((cert) => {
          const mark = marks[cert.kind] ?? marks.algo;
          return (
            <CertRow key={cert.id}>
              <CertLink
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${cert.name} (opens in a new tab)`}
              >
                <CertMark $color={mark.color} aria-hidden="true">
                  {mark.icon}
                </CertMark>
                <CertBody>
                  <CertName>{cert.name}</CertName>
                  <CertIssuer>{cert.issuer}</CertIssuer>
                </CertBody>
                <VerifyIcon aria-hidden="true">
                  <FiExternalLink size="1rem" />
                </VerifyIcon>
              </CertLink>
            </CertRow>
          );
        })}
      </CertList>
    </Reveal>
  </Section>
);

export default Certifications;
