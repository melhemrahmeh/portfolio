import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  Copyright,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';
import { profile } from '../../constants/constants';

const Footer = () => (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Location</LinkTitle>
        <LinkItem as="span">{profile.location}</LinkItem>
      </LinkColumn>

      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href={profile.phoneHref}>{profile.phone}</LinkItem>
      </LinkColumn>

      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href={`mailto:${profile.email}`}>{profile.email}</LinkItem>
      </LinkColumn>

      <LinkColumn>
        <LinkTitle>Résumé</LinkTitle>
        <LinkItem
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download PDF
        </LinkItem>
      </LinkColumn>
    </LinkList>

    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Of course I struggle. I just don&apos;t quit.</Slogan>
        <Copyright>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and
          styled-components.
        </Copyright>
      </CompanyContainer>

      <SocialContainer>
        <SocialIcons
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <AiFillGithub size="2.4rem" />
        </SocialIcons>
        <SocialIcons
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <AiFillLinkedin size="2.4rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);

export default Footer;
