import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { features } from '../featuresData'

const FeaturesSection = styled.section` padding: 150px 10%; background: #FF8C00; overflow: hidden; @media (max-width: 768px) { padding-top: 50px; } `;
const SectionTitle = styled(motion.h2)` font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; text-align: center; margin-bottom: 100px; color: #3a2a1a; text-transform: uppercase; `;
const DashboardContainer = styled.div` display: flex; justify-content: center; align-items: center; position: relative; width: 500px; height: 500px; margin: 0 auto; @media (max-width: 768px) { width: 300px; height: 300px; margin-bottom: 250px; } `;
const CentralDisplay = styled.div` width: 250px; height: 250px; border-radius: 50%; background: #FFEAD6; border: 4px solid #FFC89E; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 20px; box-shadow: inset 0 0 20px rgba(0,0,0,0.05); @media (max-width: 768px) { width: 150px; height: 150px; } `;
const FeatureNode = styled(motion.div)` position: absolute; width: 120px; height: 120px; border-radius: 50%; background: #FFEAD6; border: 2px solid #FFC89E; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; &:hover { background: #fff; border-color: #FF6B00; box-shadow: 0 0 20px rgba(255, 107, 0, 0.5); } @media (max-width: 768px) { width: 80px; height: 80px; } `;
const NodeTitle = styled.div` position: absolute; bottom: -40px; color: #856A4F; font-weight: 600; text-transform: uppercase; font-size: 0.9rem; @media (max-width: 768px) { bottom: auto; top: 90px; font-size: 0.8rem; } `;
const CentralIcon = styled(motion.div)` font-size: 4rem; color: #FF6B00; margin-bottom: 10px; @media (max-width: 768px) { font-size: 2.5rem; } `;
const CentralDescription = styled(motion.p)` color: #5C3A1A; font-size: 0.9rem; line-height: 1.5; @media (max-width: 768px) { font-size: 0.8rem; } `;

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  return (
    <FeaturesSection>
      <SectionTitle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Наши Преимущества</SectionTitle>
      <DashboardContainer>
        <AnimatePresence mode="wait"><CentralDisplay><CentralIcon key={activeFeature.id + '-icon'} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>{React.createElement(activeFeature.icon)}</CentralIcon><CentralDescription key={activeFeature.id + '-desc'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.1 }}>{activeFeature.description}</CentralDescription></CentralDisplay></AnimatePresence>
        {features.map(feature => {
          const radius = 250; const x = Math.cos(feature.angle * Math.PI / 180) * radius; const y = Math.sin(feature.angle * Math.PI / 180) * radius;
          const mobileRadius = 160; const mobileX = Math.cos(feature.angle * Math.PI / 180) * mobileRadius; const mobileY = Math.sin(feature.angle * Math.PI / 180) * mobileRadius;
          return (<FeatureNode key={feature.id} onMouseEnter={() => setActiveFeature(feature)} initial={{ x: 0, y: 0 }} animate={{ x: window.innerWidth > 768 ? x : mobileX, y: window.innerWidth > 768 ? y : mobileY }} transition={{ type: 'spring', stiffness: 100 }}>{React.createElement(feature.icon, { size: '32px', color: '#856A4F' })}<NodeTitle>{feature.title}</NodeTitle></FeatureNode>)
        })}
      </DashboardContainer>
    </FeaturesSection>
  )
}