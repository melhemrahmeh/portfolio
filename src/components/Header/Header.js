import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

import {
  Backdrop,
  Brand,
  Container,
  Drawer,
  DrawerHeader,
  DrawerLink,
  DrawerRule,
  DrawerSocials,
  DrawerTitle,
  Inner,
  MenuButton,
  Nav,
  NavLink,
  SocialIcons,
  SocialRow,
  Span,
} from './HeaderStyles';
import useActiveSection from '../../hooks/useActiveSection';
import { profile } from '../../constants/constants';

const navItems = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#tech', id: 'tech', label: 'Tech' },
  { href: '#certifications', id: 'certifications', label: 'Certifications' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

const sectionIds = navItems.map((item) => item.id);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll and allow Escape to close while the drawer is open.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <Container $scrolled={scrolled}>
        <Inner>
          <Brand href="/">
            <DiCssdeck size="2.4rem" aria-hidden="true" />
            <Span>Melhem&apos;s Space</Span>
          </Brand>

          <Nav aria-label="Main navigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    $active={active === item.id}
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Nav>

          <SocialRow>
            <SocialIcons
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              aria-label="Download résumé"
            >
              <FiDownload size="1.9rem" />
            </SocialIcons>
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

          <MenuButton
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <FiMenu size="2rem" />
          </MenuButton>
        </Inner>
      </Container>

      <Backdrop
        $open={open}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <Drawer
        $open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
      >
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <MenuButton
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FiX size="2rem" />
          </MenuButton>
        </DrawerHeader>

        {navItems.map((item) => (
          <DrawerLink
            key={item.href}
            href={item.href}
            $active={active === item.id}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </DrawerLink>
        ))}

        <DrawerRule />

        <DrawerSocials>
          <SocialIcons
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            aria-label="Download résumé"
          >
            <FiDownload size="2rem" />
          </SocialIcons>
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
        </DrawerSocials>
      </Drawer>
    </>
  );
};

export default Header;
