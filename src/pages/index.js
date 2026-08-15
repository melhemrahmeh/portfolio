import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Certifications from '../components/Certifications/Certifications';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { profile } from '../constants/constants';

const title = `${profile.name} — DevOps & Cloud Engineer`;
const description =
  'DevOps Engineer in Limassol, Cyprus. I build and run multi-cloud Kubernetes platforms with Terraform, AWS, Azure, and CI/CD — currently at FxPro. CKA and 3x AWS certified.';

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
      <meta
        property="og:image"
        content={`${profile.site}/images/profile.jpeg`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${profile.site}/images/profile.jpeg`}
      />

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
      <Section $grid id="home">
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Experience />
      <Projects />
      <Technologies />
      <Certifications />
      <Acomplishments />
      <Contact />
    </Layout>
  </>
);

export default Home;
