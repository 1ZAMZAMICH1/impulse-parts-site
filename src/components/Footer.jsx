import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa'

const FooterSection = styled.footer`
  padding: 80px 10%;
  text-align: center;
  background: #f0e9e0;
  border-top: 1px solid #e0d9cf;
`;

const FooterTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #2c2c2c;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  color: #5c5c5c;
  font-size: 24px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #ff8c00;
    transform: translateY(-5px);
  }
`;

const Copyright = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterSection>
      <FooterTitle>ИМПУЛЬС</FooterTitle>
      <SocialLinks>
        <SocialIcon href="#" target="_blank"><FaGithub /></SocialIcon>
        <SocialIcon href="#" target="_blank"><FaTelegram /></SocialIcon>
        <SocialIcon href="#" target="_blank"><FaLinkedin /></SocialIcon>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} Сделано для портфолио. Все права защищены (нет).</Copyright>
    </FooterSection>
  )
}