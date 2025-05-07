import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          marginBottom: '20px',
          textDecoration: 'none',
        }}
      >
        <DiCssdeck size="3rem" /> <Span>Melhem's Space</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about" passHref legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#experience" passHref legacyBehavior>
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" passHref legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact" passHref legacyBehavior>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/melhemrahmeh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/melhem-rahmeh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://www.instagram.com/melhem.rahme/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
