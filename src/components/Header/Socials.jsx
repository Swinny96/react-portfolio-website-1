import React from 'react'
import styled from 'styled-components'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Socials = () => {
  return (
    <HeaderSocials>
        <a href='https://linkedin.com' target='_blank'>
            <BsLinkedin/>
        </a>
        <a href='https://github.com' target='_blank'>
            <FaGithub/>
        </a>
        <a href='https://dribble.com' target='_blank'>
            <FiDribbble/>
        </a>
    </HeaderSocials>
  )
}

export default Socials

const HeaderSocials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    ::after {
        content: '';
        width: 1px;
        height: 2rem;
        background: var(--color-primary);
    }
`