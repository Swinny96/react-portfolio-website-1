import React from 'react'
import styled from 'styled-components'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experince = () => {
  return (
    <ExperinceSection id="experince">
      <h5>What Skills I have</h5>
      <h2>My Experince</h2>

      <ExperinceContainer>
        <ExperinceFrontend>
          <Heading>Frontend Development</Heading>
          <ExperinceContent>
            <ExperinceContents>
              <BsPatchCheckFill className='experince__details-icon'/>
              <Attributes>
                <Skill>HTML</Skill>
                <Level className='text_light'>Experinced</Level>
              </Attributes>
            </ExperinceContents>
            <ExperinceContents>
              <BsPatchCheckFill className='experince__details-icon'/>
              <Attributes>
                <Skill>CSS</Skill>
                <Level className='text_light'>Intermediate</Level>
              </Attributes>
            </ExperinceContents>
            <ExperinceContents>
              <BsPatchCheckFill className='experince__details-icon'/>
              <Attributes>
                <Skill>Javascript</Skill>
                <Level className='text_light'>Experinced</Level>
              </Attributes>
            </ExperinceContents>
            <ExperinceContents>
              <BsPatchCheckFill className='experince__details-icon'/>
              <Attributes>
                <Skill>Bootstrap</Skill>
                <Level className='text_light'>Experinced</Level>
              </Attributes>
            </ExperinceContents>
            <ExperinceContents>
              <BsPatchCheckFill className='experince__details-icon'/>
              <Attributes>
                <Skill>Tailwind</Skill>
                <Level className='text_light'>Experinced</Level>
              </Attributes>
            </ExperinceContents>
            <ExperinceContents>
              <BsPatchCheckFill className='experince__details-icon'/>
              <Attributes>
                <Skill>React</Skill>
                <Level className='text_light'>Experinced</Level>
              </Attributes>
            </ExperinceContents>
          </ExperinceContent>
        </ExperinceFrontend>
        <ExperinceBackend>
          <Heading>Backend Development</Heading>
            <ExperinceContent>
              <ExperinceContents>
                <BsPatchCheckFill className='experince__details-icon'/>
                <Attributes>
                  <Skill>Node JS</Skill>
                  <Level className='text_light'>Experinced</Level>
                </Attributes>
              </ExperinceContents>
              <ExperinceContents>
                <BsPatchCheckFill className='experince__details-icon'/>
                <Attributes>
                  <Skill>MongoDB</Skill>
                  <Level className='text_light'>Intermediate</Level>
                </Attributes>
              </ExperinceContents>
              <ExperinceContents>
                <BsPatchCheckFill className='experince__details-icon'/>
                <Attributes>
                  <Skill>PHP</Skill>
                  <Level className='text_light'>Intermediate</Level>
                </Attributes>
              </ExperinceContents>
              <ExperinceContents>
                <BsPatchCheckFill className='experince__details-icon'/>
                <Attributes>
                  <Skill>MySql</Skill>
                  <Level className='text_light'>Basic</Level>
                </Attributes>
              </ExperinceContents>
              <ExperinceContents>
                <BsPatchCheckFill className='experince__details-icon'/>
                <Attributes>
                  <Skill>Python</Skill>
                  <Level className='text_light'>Experinced</Level>
                </Attributes>
              </ExperinceContents>
            </ExperinceContent>
        </ExperinceBackend>
      </ExperinceContainer>
    </ExperinceSection>
  )
}

export default Experince

const ExperinceSection = styled.section``
const ExperinceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`
const ExperinceFrontend = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: defualt;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`
const ExperinceBackend = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border-radius: 2rem;
  border: 1px solid transparent;

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: defualt;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`
const Heading = styled.h3`
  text-align: center;
  margin-bottom: 2rem;]color: var(--color-primary);
`
const ExperinceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`
const ExperinceContents = styled.article`
  display: flex;
  gap: 1rem;
`
const Attributes = styled.div``
const Skill = styled.h4``
const Level = styled.small``