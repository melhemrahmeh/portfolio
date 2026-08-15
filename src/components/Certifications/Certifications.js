import React from 'react';
import { FiAward } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';

import {
  CertBody,
  CertCard,
  CertGrid,
  CertIcon,
  CertIssuer,
  CertName,
  EducationCard,
  EducationText,
} from './CertificationsStyles';
import {
  Eyebrow,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { certifications } from '../../constants/constants';

const Certifications = () => (
  <Section id="certifications">
    <SectionDivider $colorAlt />
    <Eyebrow>Education & credentials</Eyebrow>
    <SectionTitle>Certifications</SectionTitle>
    <SectionText>
      Formal proof of the things I work on daily — Kubernetes, AWS, and system
      design.
    </SectionText>

    <EducationCard>
      <CertIcon aria-hidden="true">
        <IoSchoolOutline size="1.4rem" />
      </CertIcon>
      <EducationText>
        <h3>American University of Beirut (AUB)</h3>
        <p>
          Bachelor of Science in Computer Science · USAID full scholarship ·
          Dean&apos;s Honor List
        </p>
      </EducationText>
    </EducationCard>

    <CertGrid>
      {certifications.map((cert) => (
        <CertCard key={cert.id}>
          <CertIcon aria-hidden="true">
            <FiAward size="1.3rem" />
          </CertIcon>
          <CertBody>
            <CertName>{cert.name}</CertName>
            <CertIssuer>{cert.issuer}</CertIssuer>
          </CertBody>
        </CertCard>
      ))}
    </CertGrid>
  </Section>
);

export default Certifications;
