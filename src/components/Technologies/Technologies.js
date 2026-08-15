import React from 'react';
import { DiDatabase, DiGitMerge, DiReact } from 'react-icons/di';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import { FiCode, FiShield } from 'react-icons/fi';

import {
  Chip,
  Eyebrow,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  IconBadge,
  List,
  ListContainer,
  ListItem,
  ListTitle,
  SkillList,
} from './TechnologiesStyles';

const stack = [
  {
    title: 'Cloud & Containers',
    icon: <SiKubernetes size="1.7rem" />,
    skills: [
      'AWS',
      'Azure',
      'Kubernetes',
      'Docker',
      'Helm',
      'EKS / AKS',
      'API Gateway',
      'Lambda',
      'Route53',
      'Load Balancers',
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: <SiTerraform size="1.7rem" />,
    skills: [
      'Terraform',
      'Ansible',
      'Linux',
      'Bash',
      'HAProxy',
      'Envoy Gateway',
      'Kong',
      'Nginx',
    ],
  },
  {
    title: 'CI/CD & Automation',
    icon: <DiGitMerge size="2rem" />,
    skills: [
      'Jenkins',
      'GitLab CI',
      'GitHub Actions',
      'ArgoCD',
      'Nexus',
      'Jenkins Shared Libraries',
      'Git',
    ],
  },
  {
    title: 'Programming',
    icon: <FiCode size="1.7rem" />,
    skills: [
      'Python',
      'Go',
      'Java',
      'Groovy',
      'JavaScript',
      'C++',
      'C#',
      'Dart',
      'SQL',
    ],
  },
  {
    title: 'Observability & Security',
    icon: <FiShield size="1.7rem" />,
    skills: [
      'Prometheus',
      'Grafana',
      'OpenTelemetry',
      'Splunk',
      'HashiCorp Vault',
      'IAM',
      'SSL/TLS',
      'Tenable',
      'Artifact Scanning',
    ],
  },
  {
    title: 'Databases & Messaging',
    icon: <DiDatabase size="2rem" />,
    skills: [
      'PostgreSQL',
      'AWS RDS / Aurora',
      'Redis',
      'MSSQL',
      'Oracle',
      'Sybase',
      'MongoDB',
      'ActiveMQ',
    ],
  },
  {
    title: 'Web & App Development',
    icon: <DiReact size="2rem" />,
    skills: [
      'React JS',
      'Next.js',
      'Node.js',
      'Express',
      'Django',
      'FastAPI',
      'Flutter',
      'Electron JS',
    ],
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <Eyebrow>What I work with</Eyebrow>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The tools I reach for day to day, weighted towards infrastructure,
      automation, and everything that gets code safely into production.
    </SectionText>

    <List>
      {stack.map((group) => (
        <ListItem key={group.title}>
          <IconBadge aria-hidden="true">{group.icon}</IconBadge>
          <ListContainer>
            <ListTitle>{group.title}</ListTitle>
            <SkillList>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Chip>{skill}</Chip>
                </li>
              ))}
            </SkillList>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
