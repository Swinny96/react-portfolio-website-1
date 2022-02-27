import React from 'react'
import styled from 'styled-components'
import Data from './PortfolioItems'

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <PortfolioContainer>
        {
          Data.map(({id, image, title, github, demo }) => {
            return (
              <PortfolioItem key={id}>
              <PortfolioImageConatiner>
                <PortfolioImage src={image} alt={title} />
              </PortfolioImageConatiner>
              <PortfolioHeading>{title}</PortfolioHeading>
              <PortfolioCTA>
                <PortfolioLink href={github} className='btn'>GitHub</PortfolioLink>
                <PortfolioLink href={demo} className='btn btn-primary' target='_blank'>Live Demo</PortfolioLink>
              </PortfolioCTA>
            </PortfolioItem>
            )
          })
        }
      </PortfolioContainer>
    </PortfolioSection>
  )
}

export default Portfolio

const PortfolioSection = styled.section``
const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1rem;
  }
`
const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover{
    border-color: var(--color-primary-variant);
    background: transparant;
  }
`
const PortfolioImageConatiner = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`
const PortfolioImage = styled.img``
const PortfolioHeading = styled.h3`
  margin: 1.2rem 0 2rem;
`
const PortfolioCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`
const PortfolioLink = styled.a``