import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiDatabase,
  DiGitMerge,
  DiStreamline,
  DiPython,
  DiDocker,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a lot of technologies. <br />
      From Java, Python, C++, Machine Learning, Web Development to DevOps
      Engineering!
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiStreamline size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Proficient in Python, Java, Javascript, Object Oriented Programming,
            Algorithms, Data Structures, Problem Solving.
            <br /> Worked with C++ , C#, Assembly (MIPS) , Dart, Groovy, GoLang
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Next.js, HTML, CSS, JavaScript
            <br /> Bootstrap, JQuery , Tailwind, and State Management (Redux,
            Zustand)
            <br />
            Mobile Dev (React Native , Flutter)
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End & API</ListTitle>
          <ListParagraph>
            Firebase, Azure Function in C#, AWS Lambda in JS
            <br />
            Express.js, Node.js, Nest.js, Django, Fast API
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, PostgreSQL, MongoBD, SQL Server, Sybase SQL, Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiGitMerge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Agile Development (Scrum), REST APIs, Unit Testing (Junit, Google
            Test) , Github, Bitbucket, , Azure DevOps, Netlify, Vercel, Heroku,
            ServiceNow, ActiveMQ, Machine Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps & Cloud</ListTitle>
          <ListParagraph>
            Linux, Bash Scripting, Micorservices
            <br />
            AWS, Azure, Oracle Cloud, Digital Ocean
            <br />
            Docker, Kubernetes, Jenkins, Ansible, Splunk
            <br /> Git, Github Actions, Netlify, Vercel, Heroku, Github Actions
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
