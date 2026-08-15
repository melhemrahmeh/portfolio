import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  CtaRow,
  Dot,
  GhostCta,
  LeftSection,
  PrimaryCta,
  StatusPill,
} from './HeroStyles';
import { profile } from '../../constants/constants';

const Hero = () => (
  <LeftSection>
    <StatusPill>
      <Dot />
      <span>
        <strong>{profile.role}</strong> at {profile.company} ·{' '}
        {profile.location}
      </span>
    </StatusPill>

    <SectionTitle as="h1" $main>
      Hi, I&apos;m Melhem. <br />I build and run cloud infrastructure.
    </SectionTitle>

    <SectionText>
      DevOps engineer with 4+ years across software and infrastructure,
      currently owning AWS infrastructure and multi-cloud Kubernetes platforms
      at FxPro. I work mostly in Terraform, Kubernetes, and CI/CD — automating
      deployments, migrating gateways, and keeping platforms that serve 10+
      million requests a day boring and reliable.
      <br />
      <br />
      Computer Science graduate of the American University of Beirut, one of
      only 60 students in Lebanon to receive the USAID scholarship. Certified
      Kubernetes Administrator and 3x AWS certified.
    </SectionText>

    <CtaRow>
      <PrimaryCta href="#contact">
        <HiOutlineMail aria-hidden="true" /> Get in touch
      </PrimaryCta>
      <GhostCta
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <FiDownload aria-hidden="true" /> Résumé
      </GhostCta>
      <GhostCta
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin aria-hidden="true" /> LinkedIn
      </GhostCta>
      <GhostCta href={profile.github} target="_blank" rel="noopener noreferrer">
        <AiFillGithub aria-hidden="true" /> GitHub
      </GhostCta>
    </CtaRow>
  </LeftSection>
);

export default Hero;
