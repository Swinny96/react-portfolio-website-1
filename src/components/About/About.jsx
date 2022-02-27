import React from 'react'
import styled from 'styled-components'
import Me from '../../assets/me.webp'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <AboutSection id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <AboutConatiner className='container'>
        <AboutMe>
          <Myself src={Me} alt="Christopher Swinton" />
        </AboutMe>
        <AboutContent>
          <AboutCards>
            <AboutCard>
              <FaAward className='about_icon'/>
              <Title>Experince</Title>
              <Line>5+ Years Working</Line>
            </AboutCard>
            <AboutCard>
              <FiUsers className='about_icon'/>
              <Title>Clients</Title>
              <Line>300+ Clients Wordwide</Line>
            </AboutCard>
            <AboutCard>
              <VscFolderLibrary className='about_icon'/>
              <Title>Projects</Title>
              <Line>80+ Complete</Line>
            </AboutCard>
          </AboutCards>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, veritatis voluptas possimus voluptatum ducimus modi praesentium sed fugiat distinctio maxime blanditiis, aperiam doloremque numquam ullam. Ad voluptate nobis adipisci.
          </Text>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </AboutContent>
      </AboutConatiner>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.section``
const AboutConatiner = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
const Title = styled.h5`
  font-size: 0.95rem;
`
const Line = styled.small`
  font-size: 0.7rem;
  color: var(--color-light);
`

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg, 
    transparent, 
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }
  @media screen and (max-width: 600px) {
      width: 65%;
      margin: 0 auto 3rem;
  }
`
const AboutContent = styled.div`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
const Myself = styled.img`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0);
  }
`
const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`
const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
`

const Text = styled.p`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);
  @media screen and (max-width: 1024px) {
    margin: 1rem 0 1.5rem;
  }
  @media screen and (max-width: 600px) {
    margin: 1.5rem 0;
  }
`