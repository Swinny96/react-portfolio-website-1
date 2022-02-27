import React from 'react'
import styled from 'styled-components';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <FooterSection id="footer">
      <FooterLink href='#'>CSwinton</FooterLink>
      <Permalinks>
        <Permalink>
          <Link href="#">Home</Link>
        </Permalink>
        <Permalink>
          <Link href="#about">About</Link>
        </Permalink>
        <Permalink>
          <Link href="#experince">Experince</Link>
        </Permalink>
        <Permalink>
          <Link href="#services">Services</Link>
        </Permalink>
        <Permalink>
          <Link href="#portfolio">Portfolio</Link>
        </Permalink>
        <Permalink>
          <Link href="#testimonials">Testimonials</Link>
        </Permalink>
        <Permalink>
          <Link href="#contact">Contact</Link>
        </Permalink>
      </Permalinks>
      <Socials>
        <SocialLink href='https://facebook.com'>
          <FaFacebookF className='footer__link'/>
        </SocialLink>
        <SocialLink href='https://instagram.com'>
          <FiInstagram/>
        </SocialLink>
        <SocialLink href='https://twitter.com'>
          <IoLogoTwitter/>
        </SocialLink>
      </Socials>
      <Copyright>
        <Copyprint>&copy; CSwinton, All right reserved</Copyprint>
      </Copyright>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;
`
const FooterLink = styled.a`
  color: var(--color-bg);
  font-size: 2rem;
  font-weight; 500;
  margin-bottom: 2rem;
  display: inline-block;
`
const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.3rem;
  }
`
const Permalink = styled.li``
const Link = styled.a`
  color: var(--color-bg);
`
const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 600px) {
    gap: 2.6rem;
  }
`
const SocialLink = styled.a`
  background: var(--color-bg);
  color: var(--color-white);
  padding: 0.8rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;
  transition: var(--transition);


  &:hover {
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
  }
`
const Copyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`
const Copyprint = styled.small``