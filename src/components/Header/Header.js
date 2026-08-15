import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Brand,
  Container,
  Inner,
  Nav,
  NavLink,
  SocialIcons,
  SocialRow,
  Span,
} from './HeaderStyles';
import { profile } from '../../constants/constants';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Tech' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => (
  <Container>
    <Inner>
      <Brand href="/">
        <DiCssdeck size="2.4rem" aria-hidden="true" />
        <Span>Melhem&apos;s Space</Span>
      </Brand>

      <Nav aria-label="Main navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </Nav>

      <SocialRow>
        <SocialIcons
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <AiFillGithub size="2.2rem" />
        </SocialIcons>
        <SocialIcons
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <AiFillLinkedin size="2.2rem" />
        </SocialIcons>
      </SocialRow>
    </Inner>
  </Container>
);

export default Header;
