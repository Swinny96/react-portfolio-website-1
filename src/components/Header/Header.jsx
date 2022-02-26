import React from 'react'
import styled from 'styled-components'
import "./Header.css"
import CTA from './CTA'
import Me from '../../assets/me.webp'
import Socials from './Socials'

const Header = () => {
  return (
    <MyHeader> 
      <HeaderContainer className="container header__container">
        <Welcome>Hello I'm</Welcome>
        <Name>Christopher Swinton</Name>
        <Role className='text-light'>Front-End Developer</Role>
        <CTA />
        <Socials />
        <MySelf className="me">
          <img src={Me} alt='Christopher Swinton'/>
        </MySelf>
        <ScrollDown className='scroll_down' href='#contact'>
          Scroll Down
        </ScrollDown>
      </HeaderContainer>
    </MyHeader>
  )
}

export default Header

const MyHeader = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 68vh;
  }
  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`
const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`
const Welcome = styled.h5``
const Name = styled.h1``
const MySelf = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`
const Role = styled.h5``
const ScrollDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  @media screen and (max-width: 600px) { 
    display: none;
  }
`