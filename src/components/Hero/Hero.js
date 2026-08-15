import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  AvatarRing,
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
    {/* Renders only once a real headshot is set in constants.profile.photo. */}
    {profile.photo && (
      <AvatarRing>
        <img src={profile.photo} alt={`${profile.name}, ${profile.role}`} />
      </AvatarRing>
    )}

    <StatusPill>
      <Dot />
      <span>
        <strong>{profile.role}</strong> at {profile.company} ·{' '}
        {profile.location}
      </span>
    </StatusPill>

    <SectionTitle as="h1" $main>
      I build and run <br />
      cloud infrastructure.
    </SectionTitle>

    <SectionText>
      I&apos;m Melhem — a DevOps engineer with 4+ years across software and
      infrastructure, currently owning AWS infrastructure and multi-cloud
      Kubernetes platforms at FxPro. Terraform, Kubernetes, and CI/CD are where
      I live: automating deployments, migrating gateways, and keeping platforms
      that serve 10+ million requests a day boring and reliable.
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
