import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ewk0dj', 'template_tod4tqs', form.current, 'oNIEGSlOlNLJMn0V6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <ContactSection id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <ContactContainer className='container'>
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail className='contact__option-icon'/>
            <ContactType>Email</ContactType>
            <ContactName>dummyemail@gmail.com</ContactName>
            <ContactLink href='mailto:dummyemail@gmail.com' target='_blank'>Send a message</ContactLink>
          </ContactOption>
          <ContactOption>
            <RiMessengerLine/>
            <ContactType>Messenger</ContactType>
            <ContactName>Christopher Swinton</ContactName>
            <ContactLink href='https://facebook.com' target='_blank'>Send a message</ContactLink>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp/>
            <ContactType>WhatsApp</ContactType>
            <ContactName>+447479537010</ContactName>
            <ContactLink href='https://api.whatsapp.com/send?phone=+447479537010' target='_blank'>Send a message</ContactLink>
          </ContactOption>
        </ContactOptions>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactInput type="text" name='name' placeholder='Your Full Name' required/>
          <ContactInput type="email" name='email' placeholder='Your Email' required/>
          <ContactTextArea name='meesage' rows='7' placeholder='Your Message' required></ContactTextArea>
          <ContactSubmit type='submit' className='btn btn-primary'>Send Message</ContactSubmit>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.section`
  margin: 0 auto;
`
const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;
  @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 2rem;
  }
  @media screen and (max-width: 600px) {
      width: var(--container-width-sm);
  }
`
const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const ContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border 1px solid transparant;
  transition: var(--transition);

  &:hover {
    background: transparant;
    border-color: var(--color-primary-variant);
  }
`
const ContactType = styled.h4``
const ContactName = styled.h5`
  color: var(--color-light);
`
const ContactLink = styled.a`
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 0.8rem;
`
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const ContactInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
`
const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
`
const ContactSubmit = styled.button``