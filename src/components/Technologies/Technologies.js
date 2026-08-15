import React from 'react';
import { DiDatabase, DiGitMerge, DiReact } from 'react-icons/di';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import { FiCode, FiShield, FiShuffle } from 'react-icons/fi';

import {
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  AlsoLine,
  CoreChip,
  CoreList,
  GroupBody,
  GroupLabel,
  StackList,
  StackRow,
} from './TechnologiesStyles';
import Reveal from '../Reveal/Reveal';

/**
 * `core` is what I reach for daily and gets chip treatment; `also` is real
 * but secondary experience, kept as quiet running text so the section stays
 * scannable instead of becoming sixty identical pills.
 */
const stack = [
  {
    title: 'Cloud & Containers',
    icon: <SiKubernetes size="1.15rem" />,
    core: ['Kubernetes', 'AWS', 'Azure', 'Docker'],
    also: ['Helm', 'EKS', 'AKS', 'EC2', 'S3', 'Lambda', 'Route53', 'ACM'],
  },
  {
    title: 'Infrastructure as Code',
    icon: <SiTerraform size="1.05rem" />,
    core: ['Terraform', 'Ansible', 'Linux'],
    also: ['Bash', 'HAProxy', 'Nginx', 'Modular IaC'],
  },
  {
    title: 'Gateways & Traffic',
    icon: <FiShuffle size="1.05rem" />,
    core: ['Envoy Gateway', 'Kong', 'AWS API Gateway'],
    also: ['Kubernetes Ingress', 'Load Balancers', 'SSL/TLS'],
  },
  {
    title: 'CI/CD',
    icon: <DiGitMerge size="1.3rem" />,
    core: ['Jenkins', 'GitLab CI', 'ArgoCD'],
    also: ['GitHub Actions', 'Nexus', 'Jenkins Shared Libraries', 'Git'],
  },
  {
    title: 'Languages',
    icon: <FiCode size="1.05rem" />,
    core: ['Python', 'Go', 'Java'],
    also: ['Groovy', 'JavaScript', 'C++', 'C#', 'Dart', 'SQL'],
  },
  {
    title: 'Observability & Security',
    icon: <FiShield size="1.05rem" />,
    core: ['Prometheus', 'Grafana', 'OpenTelemetry', 'HashiCorp Vault'],
    also: ['Splunk', 'IAM', 'Tenable', 'Artifact scanning'],
  },
  {
    title: 'Data & Messaging',
    icon: <DiDatabase size="1.3rem" />,
    core: ['PostgreSQL', 'Redis', 'AWS RDS / Aurora'],
    also: ['MSSQL', 'Oracle', 'Sybase', 'MongoDB', 'ActiveMQ'],
  },
  {
    title: 'Web & App',
    icon: <DiReact size="1.3rem" />,
    core: ['React', 'Next.js', 'Node.js'],
    also: ['Express', 'Django', 'FastAPI', 'Flutter', 'Electron JS'],
  },
];

const Technologies = () => (
  <Section id="tech">
    <Reveal>
      <Eyebrow>What I work with</Eyebrow>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Weighted towards infrastructure and automation. Highlighted tools are
        the ones I use week to week; the rest is real but secondary experience.
      </SectionText>
    </Reveal>

    <Reveal delay={80}>
      <StackList>
        {stack.map((group) => (
          <StackRow key={group.title}>
            <GroupLabel>
              {group.icon}
              {group.title}
            </GroupLabel>
            <GroupBody>
              <CoreList>
                {group.core.map((item) => (
                  <li key={item}>
                    <CoreChip>{item}</CoreChip>
                  </li>
                ))}
              </CoreList>
              {group.also.length > 0 && (
                <AlsoLine>{group.also.join(' · ')}</AlsoLine>
              )}
            </GroupBody>
          </StackRow>
        ))}
      </StackList>
    </Reveal>
  </Section>
);

export default Technologies;
