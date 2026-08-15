import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';

import {
  DirectLink,
  DirectLinks,
  Field,
  Form,
  FormStatus,
  HoneyPot,
  Input,
  Label,
  SubmitButton,
  TextArea,
} from './ContactStyles';
import {
  Eyebrow,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { profile } from '../../constants/constants';

const EMAILJS_SERVICE = 'service_5lbrexw';
const EMAILJS_TEMPLATE = 'template_iv5pb2p';
const EMAILJS_PUBLIC_KEY = 'SpHCRXL1ap7PX2DXj';

const EMPTY_FORM = { name: '', email: '', message: '' };

/** Minimum gap between sends, so the EmailJS quota can't be drained in a loop. */
const THROTTLE_MS = 30_000;

function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');
  // Bots fill every field they find; humans never see this one.
  const [trap, setTrap] = useState('');
  const lastSentAt = useRef(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;

    // Silently accept honeypot submissions rather than telling the bot why.
    if (trap) {
      setStatus('sent');
      setValues(EMPTY_FORM);
      return;
    }

    const since = Date.now() - lastSentAt.current;
    if (since < THROTTLE_MS) {
      const wait = Math.ceil((THROTTLE_MS - since) / 1000);
      toast.info(`Please wait ${wait}s before sending another message.`);
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, values, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      lastSentAt.current = Date.now();
      setStatus('sent');
      setValues(EMPTY_FORM);
      toast.success('Message sent — I will get back to you shortly!');
    } catch (error) {
      setStatus('error');
      toast.error('Something went wrong. Please email me directly instead.');
    }
  };

  return (
    <Section id="contact">
      <Reveal>
        <Eyebrow>Say hello</Eyebrow>
        <SectionTitle>Contact</SectionTitle>
        <SectionText>
          Interested in working together, or just want to connect? Leave a
          message below and I&apos;ll get back to you.
        </SectionText>
      </Reveal>

      <DirectLinks>
        <DirectLink href={`mailto:${profile.email}`}>
          <HiOutlineMail aria-hidden="true" /> {profile.email}
        </DirectLink>
        <DirectLink
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin aria-hidden="true" /> LinkedIn
        </DirectLink>
        <DirectLink
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub aria-hidden="true" /> GitHub
        </DirectLink>
      </DirectLinks>

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            value={values.name}
            onChange={handleChange}
          />
        </Field>

        <Field>
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            value={values.email}
            onChange={handleChange}
          />
        </Field>

        <Field>
          <Label htmlFor="contact-message">Message</Label>
          <TextArea
            id="contact-message"
            name="message"
            rows={8}
            placeholder="What would you like to talk about?"
            required
            value={values.message}
            onChange={handleChange}
          />
        </Field>

        <HoneyPot aria-hidden="true">
          <label htmlFor="contact-company">
            Company (leave this field empty)
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={trap}
            onChange={(event) => setTrap(event.target.value)}
          />
        </HoneyPot>

        <SubmitButton type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </SubmitButton>

        <FormStatus
          role="status"
          aria-live="polite"
          $error={status === 'error'}
        >
          {status === 'sent' && 'Thanks! Your message is on its way.'}
          {status === 'error' &&
            `Your message could not be sent. Reach me directly at ${profile.email}.`}
        </FormStatus>
      </Form>

      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Section>
  );
}

export default Contact;
