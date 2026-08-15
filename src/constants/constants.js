export const profile = {
  name: 'Melhem Rahmeh',
  role: 'DevOps Engineer',
  company: 'FxPro',
  location: 'Limassol, Cyprus',
  email: 'melhem.rahmehh@gmail.com',
  phone: '+357 96176803',
  phoneHref: 'tel:+35796176803',
  github: 'https://github.com/melhemrahmeh',
  linkedin: 'https://www.linkedin.com/in/melhem-rahmeh/',
  site: 'https://melhemrahmeh.com',
  resume: '/Melhem-Rahmeh-Resume.pdf',
};

export const experience = [
  {
    title: 'DevOps Engineer',
    company: 'FxPro',
    location: 'Limassol, Cyprus',
    image: '/images/fx.png',
    date: 'September 2025 - Present',
    current: true,
    highlights: [
      {
        label: 'Multi-Cloud Kubernetes Orchestration',
        text: 'Managed the full deployment of a corporate banking project on AWS and Azure from scratch, using Terraform, Kubernetes, AWS RDS, and API Gateway while maintaining 99.999% service availability.',
      },
      {
        label: 'AWS Infrastructure & Automation',
        text: "Primary engineer responsible for the company's AWS infrastructure, refactoring and re-architecting it with Terraform and automating the full API deployment lifecycle, eliminating manual intervention and standardizing infrastructure-as-code practices across the organization.",
      },
      {
        label: 'Envoy Gateway Migration',
        text: 'Migrated 30+ services including corporate websites from Kubernetes Ingress to Envoy Gateway across 4 clusters (2 AKS and 2 on-prem), serving 10+ million requests per day. Separately migrated 300+ externally exposed APIs from Kong Gateway to Envoy Gateway to unify the API gateway layer.',
      },
      {
        label: 'VCS Migration',
        text: 'Executed a high-impact migration of all repositories from Bitbucket to GitLab, adjusting their CI processes, centralizing the codebase to improve security and standardizing CI/CD workflows for an entire department.',
      },
      {
        label: 'Global Mobile Delivery Framework',
        text: 'Developed custom deployment scripts to automate app distribution across Google Play, the App Store, and RuStore.',
      },
      {
        label: 'Operational Excellence',
        text: 'Enforced industry best practices across the stack — modular Terraform code, reusable Ansible playbooks, and secure Jenkins pipelines — while collaborating daily with different development teams.',
      },
    ],
    tags: [
      'Terraform',
      'Kubernetes',
      'AWS',
      'Azure',
      'Envoy Gateway',
      'GitLab CI',
      'Ansible',
      'Jenkins',
    ],
    id: 0,
  },
  {
    title: 'DevOps Engineer',
    company: 'Murex',
    location: 'Nicosia, Cyprus',
    image: '/images/murex.png',
    date: 'June 2023 - September 2025',
    highlights: [
      {
        label: 'Automation Framework Operations',
        text: 'Collaborated across 3 teams to support the development, upgrades, and maintenance of an automation framework for testing, compilation, and deployment of the Murex application.',
      },
      {
        label: 'CI/CD Innovation',
        text: 'Implemented advanced CI/CD pipelines using Helm charts, Kubernetes, Docker, Nexus, and Jenkins, with security measures including artifact vulnerability scanning and access control.',
      },
      {
        label: 'Kubernetes Runtime',
        text: 'Designed a runtime environment for automated tests in HA/elastic mode, supporting 100+ daily deployments in the official Murex test validation process across 10+ Kubernetes clusters.',
      },
      {
        label: 'Incident Recovery',
        text: 'Designed and implemented a self-healing and automated incident recovery system for a production environment serving 2,000+ users, enabling automatic issue detection, service restart, user notification, and system cleanup.',
      },
      {
        label: 'Automation Excellence',
        text: "Accelerated processing speeds by 15x for critical operations, reducing a task's response time from two hours to eight minutes.",
      },
      {
        label: 'Technical Support',
        text: 'Resolved over 1,500 technical tickets involving deployment issues, bugs, and exceptions for tools used by 2,000+ employees, managing infrastructure across on-premises, Azure, and AWS.',
      },
      {
        label: 'Innovation & Mentoring',
        text: 'Introduced ArgoCD, Python, and OpenTelemetry into the team CI/CD workflows, built reusable Jenkins shared libraries, and mentored two new team members on tooling and support best practices.',
      },
    ],
    tags: [
      'Kubernetes',
      'Helm',
      'Jenkins',
      'Docker',
      'ArgoCD',
      'Ansible',
      'Python',
      'Splunk',
    ],
    id: 1,
  },
  {
    title: 'System Analyst',
    company: 'Maids.cc',
    location: 'Remote to Dubai, UAE',
    image: '/images/maids.png',
    date: 'November 2022 - May 2023',
    highlights: [
      {
        label: 'ERP System Enhancement',
        text: 'Led testing and upgrades of the company Accounting and Money Collection modules to improve efficiency across the release lifecycle. Provided L1 technical support to 5 teams, supporting over 30 employees.',
      },
      {
        label: 'Data Automation',
        text: 'Created SQL and Python-based data validation tools used by analysts to identify production data discrepancies faster, reducing manual correction efforts by 30%.',
      },
    ],
    tags: ['SQL Server', 'Python', 'ERP', 'Data Validation', 'Azure'],
    id: 2,
  },
  {
    title: 'Software Engineer',
    company: 'Asset Science LLC',
    location: 'Beirut, Lebanon',
    image: '/images/asci.jpg',
    date: 'June 2022 - November 2022',
    highlights: [
      {
        label: 'Application Engineering',
        text: 'Built robust desktop and web applications following an Agile development lifecycle, applying a diverse technology stack across 2 teams including React JS, Electron JS, and Java.',
      },
      {
        label: 'Tooling',
        text: 'Worked with Chart.js, Redux, Flask, and Bitbucket pipelines to ship and maintain production features.',
      },
    ],
    tags: ['React JS', 'Electron JS', 'Java', 'C++', 'Redux', 'Agile'],
    id: 3,
  },
  {
    title: 'Full Stack Engineer (Intern)',
    company: 'EduPass NGO',
    location: 'Beirut, Lebanon',
    image: '/images/edupass.png',
    date: 'June 2022',
    highlights: [
      {
        label: 'Website Delivery',
        text: 'Developed a complete website for EduPass NGO in 30 days using React JS and Django.',
      },
    ],
    tags: ['React JS', 'Django', 'PostgreSQL'],
    id: 4,
  },
  {
    title: 'Front End Engineer (Intern)',
    company: 'Bennett & Ranville',
    location: 'Remote',
    image: '/images/bennett_ranville_cover.jpg',
    date: 'April 2022 - May 2022',
    highlights: [
      {
        label: 'Healthcare Platform',
        text: 'Worked in an Agile environment as a React JS developer on a healthcare management project, building the website with React JS and AWS Lambda.',
      },
      {
        label: 'Delivery Pipeline',
        text: 'Built a CI/CD pipeline to deploy the website using GitHub Actions on Azure Static Web Apps.',
      },
    ],
    tags: ['React JS', 'AWS Lambda', 'GitHub Actions', 'Azure'],
    id: 5,
  },
];

export const certifications = [
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'The Linux Foundation',
    id: 0,
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    id: 1,
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    id: 2,
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    id: 3,
  },
  {
    name: 'Infrastructure & Systems Expert',
    issuer: 'AlgoExpert — 100+ infrastructure and system design problems',
    id: 4,
  },
  {
    name: 'AlgoExpert Certification',
    issuer: 'AlgoExpert — 100+ algorithm and data structure problems',
    id: 5,
  },
];

export const projects = [
  {
    title: 'IvarGrand',
    description:
      'Freelance project: a marketing website for a Dubai-based company selling car diesel oils, built from scratch and deployed on Netlify.',
    image: '/images/ivar.PNG',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    source: 'https://github.com/melhemrahmeh/ivargrand',
    visit: 'https://ivargrand.com/',
    id: 1,
  },
  {
    title: 'Reddit Bot Detection System',
    description:
      'Bots generate a large share of low-value content on social platforms. This project trains a set of machine learning models that perform Reddit bot detection across different feature sets built from user activity.',
    image: '/images/reddit.png',
    tags: ['Python', 'Machine Learning', 'Reddit API', 'MongoDB'],
    source: 'https://github.com/melhemrahmeh/reddit_bot_detection',
    visit: null,
    id: 5,
  },
  {
    title: 'CourSeera — AUB Course Query System',
    description:
      'Downloads and parses all 26 files listing the courses taught in the current semester at the American University of Beirut, builds an in-memory database, and exposes it through a CLI and a Telegram bot.',
    image: '/images/courseera.png',
    tags: ['Java', 'Maven', 'JUnit', 'Telegram Bot API'],
    source: 'https://github.com/melhemrahmeh/CourseeraFactory',
    visit: null,
    id: 6,
  },
  {
    title: 'Random Fact Generator',
    description:
      'A small single-page app that pulls and displays random facts from external APIs.',
    image: '/images/randomfact.png',
    tags: ['React JS', 'Vite', 'pnpm'],
    source: 'https://github.com/melhemrahmeh/random-fact-generator',
    visit: 'https://randomlytrue.netlify.app/',
    id: 7,
  },
  {
    title: 'Currency Converter',
    description:
      'Converts amounts between currencies using live exchange rates from the OANDA API.',
    image: '/images/money.png',
    tags: ['React JS', 'Vite', 'OANDA API'],
    source: 'https://github.com/melhemrahmeh/currency-converter',
    visit: 'https://moneyconvert.netlify.app/',
    id: 8,
  },
  {
    title: 'Quiz Cloud',
    description:
      'A practice app containing questions and answers for several cloud certification exams.',
    image: '/images/quiz.png',
    tags: ['React JS', 'Vite', 'pnpm'],
    source: 'https://github.com/melhemrahmeh/quizcloud',
    visit: 'https://quizcloud-test.netlify.app/',
    id: 9,
  },
];

export const TimeLineData = [
  {
    year: 2019,
    text: 'Wrote my first line of code in C++ and was accepted into the USAID scholarship at AUB.',
  },
  {
    year: 2020,
    text: 'Started my Python and Django journey, and completed my first website using vanilla JavaScript and Django.',
  },
  {
    year: 2021,
    text: 'Started my Java and problem-solving journey as a first-year computer science student.',
  },
  {
    year: 2022,
    text: 'Built solid knowledge of React JS, Node JS, and machine learning, landed my first internship as a front-end developer, then my first full-time software engineering role.',
  },
  {
    year: 2023,
    text: 'Moved to Cyprus and joined Murex as a DevOps Engineer, going deep on Kubernetes, CI/CD, and infrastructure engineering.',
  },
  {
    year: 2025,
    text: 'Earned the CKA and three AWS certifications, then joined FxPro in Limassol to own AWS infrastructure and multi-cloud Kubernetes platforms.',
  },
  {
    year: 2026,
    text: 'Running Terraform-managed multi-cloud infrastructure and an Envoy Gateway layer serving 10+ million requests per day.',
  },
];
