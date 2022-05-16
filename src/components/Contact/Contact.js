import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ContactStyles';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = () => (
    <Section id="contact">
        <br />
        <SectionTitle>Contact Me</SectionTitle>
        <SectionText>
            <div>
                Interested in working together?<br />
                Or perhaps you would just like to connect? So kindly leave a message bellow.
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name:</Label>
                        <br />
                        <Input type="text" name="email" id="exampleEmail" placeholder="Enter your Name" />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Label for="exampleEmail">Email:</Label>
                        <br />
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" />
                        <br />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Label for="exampleText">Message:</Label>
                        <br />
                        <Input type="textarea" name="text" id="exampleText" rows="5" placeholder="Feel free to write your Message!" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        </SectionText>
        {/* <SectionDivider colorAlt /> */}
    </Section>
);

export default Contact;
