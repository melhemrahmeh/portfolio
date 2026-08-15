import React from 'react';
import { SiAmazonwebservices, SiKubernetes } from 'react-icons/si';
import { FiCode } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';

import {
  CertBody,
  CertIssuer,
  CertList,
  CertMark,
  CertName,
  CertRow,
  EducationCard,
  EducationIcon,
  EducationText,
} from './CertificationsStyles';
import {
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { certifications } from '../../constants/constants';

/** Brand marks keyed off the issuer, with each vendor's own colour. */
const marks = {
  kubernetes: { icon: <SiKubernetes size="1.25rem" />, color: '#326CE5' },
  aws: { icon: <SiAmazonwebservices size="1.25rem" />, color: '#FF9900' },
  algoexpert: { icon: <FiCode size="1.15rem" />, color: '#13ADC7' },
};

const markFor = (cert) => {
  if (cert.name.includes('Kubernetes')) return marks.kubernetes;
  if (cert.name.startsWith('AWS')) return marks.aws;
  return marks.algoexpert;
};

const Certifications = () => (
  <Section id="certifications">
    <Reveal>
      <Eyebrow>Education & credentials</Eyebrow>
      <SectionTitle>Certifications</SectionTitle>
      <SectionText>
        Formal proof of the things I work on daily — Kubernetes, AWS, and system
        design.
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
          const mark = markFor(cert);
          return (
            <CertRow key={cert.id}>
              <CertMark $color={mark.color} aria-hidden="true">
                {mark.icon}
              </CertMark>
              <CertBody>
                <CertName>{cert.name}</CertName>
                <CertIssuer>{cert.issuer}</CertIssuer>
              </CertBody>
            </CertRow>
          );
        })}
      </CertList>
    </Reveal>
  </Section>
);

export default Certifications;
