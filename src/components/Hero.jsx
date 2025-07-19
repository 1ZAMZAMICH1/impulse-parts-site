import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import Model from './Model'

const heroGlow = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-45%, -55%) scale(1.2); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
  background-color: #E57D00; /* Более темный базовый оранжевый */

  /* Анимированный градиент, который мы возвращаем */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120vw;
    height: 120vh;
    background: radial-gradient(ellipse at center, #FF8C00 0%, transparent 70%);
    filter: blur(50px);
    z-index: 0;
    animation: ${heroGlow} 20s ease-in-out infinite;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 120px 5% 80px;
    height: auto;
    min-height: 100vh;
  }
`;

const Content = styled(motion.div)`
  z-index: 2; display: flex; flex-direction: column; gap: 20px; max-width: 40%;
  @media (max-width: 992px) { max-width: 100%; align-items: center; margin-bottom: 50px; }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 7vw, 6rem); font-weight: 900; line-height: 1.1; text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem); max-width: 500px;
  color: #FFEAD6;
  text-shadow: 0 1px 5px rgba(0,0,0,0.2);
`;

const CTAButton = styled(motion.button)`
  width: fit-content; padding: 15px 30px; font-size: 1rem; font-weight: 700; text-transform: uppercase;
  color: #FF8C00; /* Оранжевый текст */
  background: #FFFFFF; /* Белая кнопка */
  border: none; border-radius: 8px; cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover { background: #FFEAD6; transform: translateY(-3px); }
`;

const ModelContainer = styled.div`
  position: absolute; width: 70%; height: 100%; top: 0; right: -10%; z-index: 1;
  @media (max-width: 992px) { position: relative; width: 120%; height: 50vh; right: auto; top: auto; }
`;

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

export default function Hero() {
  return (
    <HeroSection>
      <Content variants={containerVariants} initial="hidden" animate="visible">
        <Title variants={itemVariants}>Импульс</Title>
        <Subtitle variants={itemVariants}>Инновационные компоненты, которые зажигают мощь твоего двигателя.</Subtitle>
        <CTAButton variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Перейти в каталог</CTAButton>
      </Content>
      <ModelContainer><Model /></ModelContainer>
    </HeroSection>
  )
}