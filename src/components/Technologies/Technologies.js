import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiDatabase,
  DiGitMerge,
  DiStreamline,
  DiPython,
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
      From Java, Python, C++, Machine Learning to Web Development!
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, React Native, Next.js, HTML, CSS, JavaScript, Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Firesbase, Azure Function in C#, <br />
            Express.js, Node.js, Django
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
            MySQL, PostgreSQL, MongoBD, SQL Server, Firestore
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
            Test) , Github, Bitbucket, DevOps, CI/CD, Github Actions, Azure
            DevOps, Netlify, Vercel, Heroku.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Python, Numpy, SKlearn, Pandas, Keras, TensorFlow, Neural Networks,
            Natural Language Processing, Deep Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiStreamline size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Proficient in Python, Java, Javascript, Object Oriented Programming,
            Algorithms, Data Structures, Problem Solving.
            <br /> Worked with C++ , C#, Assembly (MIPS)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
