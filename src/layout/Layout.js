import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container, SkipLink } from './LayoutStyles';

export const Layout = ({ children }) => (
  <>
    <SkipLink href="#main-content">Skip to content</SkipLink>
    <Header />
    <Container>
      <main id="main-content">{children}</main>
    </Container>
    <Footer />
  </>
);
