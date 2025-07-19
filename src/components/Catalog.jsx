import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categories } from '../data'
import { FaPlus, FaMinus } from 'react-icons/fa'

const CatalogSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1a1c1e;
  overflow: hidden;
`;

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  padding: 80px 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Row = styled.div`
  display: flex;
  flex: 1;
`;

const Panel = styled(Link)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex: 1;
  transition: flex 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), filter 0.3s ease;

  ${props => props.isHovered && css`
    flex: 7;
  `}
  
  ${props => props.isAnyHovered && !props.isHovered && css`
    flex: 0.2;
    filter: brightness(0.7);
  `}
`;

const CollapsedTitle = styled(motion.h2)`
  color: ${props => props.color === '#F5F5F5' || props.color === '#FBC02D' ? '#212121' : '#fff'};
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  text-transform: uppercase;
  transition: opacity 0.3s ease;
  padding: 0 10px;
  text-align: center;

  ${props => props.isAnyHovered && !props.isHovered && css`
    opacity: 0;
  `}
`;

const ExpandedContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
`;

const ExpandedTitle = styled(motion.h2)`
  color: ${props => props.color === '#F5F5F5' || props.color === '#FBC02D' ? '#212121' : '#fff'};
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -3px;
  flex-basis: 50%;
  text-align: left;
`;

const PanelImage = styled(motion.img)`
  max-width: 40%;
  max-height: 80%;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
`;

const MobilePanel = styled(motion.div)`
  background-color: ${props => props.color};
  border-radius: 12px;
  margin-bottom: 15px;
  overflow: hidden;
`;

const MobileHeader = styled(motion.div)`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const MobileTitle = styled.h3`
  color: ${props => props.color === '#F5F5F5' || props.color === '#FBC02D' ? '#212121' : '#fff'};
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const MobileIcon = styled.div`
  color: ${props => props.color === '#F5F5F5' || props.color === '#FBC02D' ? '#212121' : '#fff'};
  font-size: 1.5rem;
`;

const MobileContent = styled(motion.div)`
  padding: 0 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MobileImage = styled.img`
  width: 80%;
  max-height: 200px;
  object-fit: contain;
`;

const MobileLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
`;


const CategoryPanelDesktop = ({ category, index, hoveredIndex, setHoveredIndex }) => {
  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;
  return (
    <Panel to={category.path} color={category.color} isHovered={isHovered} isAnyHovered={isAnyHovered} onMouseEnter={() => setHoveredIndex(index)}>
      <AnimatePresence>
        {!isHovered && <CollapsedTitle isAnyHovered={isAnyHovered} isHovered={isHovered} color={category.color} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{category.name}</CollapsedTitle>}
      </AnimatePresence>
      <AnimatePresence>
        {isHovered && (
          <ExpandedContent>
            <ExpandedTitle color={category.color} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>{category.name}</ExpandedTitle>
            <PanelImage src={category.image} alt={category.name} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring' }}/>
          </ExpandedContent>
        )}
      </AnimatePresence>
    </Panel>
  );
};

const CategoryPanelMobile = ({ category, index, activeIndex, setActiveIndex }) => {
    const isActive = index === activeIndex;
    return (
        <MobilePanel color={category.color} layout>
            <MobileHeader onClick={() => setActiveIndex(isActive ? null : index)} layout>
                <MobileTitle color={category.color}>{category.name}</MobileTitle>
                <MobileIcon color={category.color}>
                    {isActive ? <FaMinus /> : <FaPlus />}
                </MobileIcon>
            </MobileHeader>
            <AnimatePresence>
            {isActive && (
                <MobileContent
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <MobileImage src={category.image} alt={category.name} />
                    <MobileLink to={category.path}>Перейти в раздел</MobileLink>
                </MobileContent>
            )}
            </AnimatePresence>
        </MobilePanel>
    )
}

export default function Catalog() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const row1 = categories.slice(0, 7);
  const row2 = categories.slice(7);

  return (
    <CatalogSection>
      <DesktopContainer onMouseLeave={() => setHoveredIndex(null)}>
        <Row>
          {row1.map((cat, i) => <CategoryPanelDesktop key={cat.id} category={cat} index={i} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />)}
        </Row>
        <Row>
          {row2.map((cat, i) => <CategoryPanelDesktop key={cat.id} category={cat} index={i + row1.length} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />)}
        </Row>
      </DesktopContainer>

      <MobileContainer>
        {categories.map((cat, i) => <CategoryPanelMobile key={cat.id} category={cat} index={i} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>)}
      </MobileContainer>
    </CatalogSection>
  );
}