import React from 'react'
import styled from 'styled-components'
import CV from "../../assets/CV.pdf"

const CTA = () => {
  return (
    <CTAGroup className='header__socials'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </CTAGroup>
  )
}

export default CTA

const CTAGroup = styled.div`
	margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
`