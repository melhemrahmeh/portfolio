import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

import { Layout } from '../layout/Layout';
import { Eyebrow, Section, SectionText } from '../styles/GlobalComponents';
import { profile } from '../constants/constants';

const Code = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 132px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 84px;
  }
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 14px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  padding: 14px 26px;
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.gradients.primary};
  transition: 0.3s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -12px rgba(19, 173, 199, 0.8);
  }
`;

const NotFound = () => (
  <>
    <Head>
      <title>{`Page not found — ${profile.name}`}</title>
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Section>
        <Eyebrow>Error</Eyebrow>
        <Code>404</Code>
        <Heading>This page took an unplanned rollback.</Heading>
        <SectionText>
          The page you were looking for doesn&apos;t exist — it may have been
          moved or renamed. Let&apos;s get you back to somewhere useful.
        </SectionText>
        <HomeLink href="/">
          <FiArrowLeft aria-hidden="true" /> Back home
        </HomeLink>
      </Section>
    </Layout>
  </>
);

export default NotFound;
