import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import Certifications from '../components/Certifications/Certifications';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import TerminalCard from '../components/Hero/TerminalCard';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';

import { Layout } from '../layout/Layout';
import { Band, HeroGrid, RightSection } from '../styles/GlobalComponents';
import { profile } from '../constants/constants';

const title = `${profile.name} — DevOps & Cloud Engineer`;
const description =
  'DevOps Engineer in Limassol, Cyprus. I build and run multi-cloud Kubernetes platforms with Terraform, AWS, Azure, and CI/CD — currently at FxPro. CKA and 3x AWS certified.';
const ogImage = `${profile.site}/og-card.png`;

const Home = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.name} />
      <meta
        name="keywords"
        content="DevOps Engineer, Cloud Engineer, Kubernetes, Terraform, AWS, Azure, CI/CD, Cyprus, Melhem Rahmeh"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={profile.site} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={profile.site} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.role,
            email: `mailto:${profile.email}`,
            url: profile.site,
            image: ogImage,
            worksFor: { '@type': 'Organization', name: profile.company },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Limassol',
              addressCountry: 'CY',
            },
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'American University of Beirut',
            },
            sameAs: [profile.github, profile.linkedin],
          }),
        }}
      />
    </Head>

    <Layout>
      <HeroGrid id="home">
        <Hero />
        <RightSection>
          <TerminalCard />
        </RightSection>
      </HeroGrid>

      <Timeline />

      {/* Tinted bands break the page into distinct zones instead of one
          continuous sheet of identical sections. */}
      <Band $tint>
        <Experience />
      </Band>

      <Projects />

      <Band $tint>
        <Technologies />
        <Certifications />
      </Band>

      <Acomplishments />
      <Contact />
    </Layout>
  </>
);

export default Home;
