import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import YandexMap from './YandexMap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 150px 10%;
  background: #FF8C00;

  @media (max-width: 992px) {
    padding: 100px 5%;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #f0e9e0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  color: #2c2c2c;
  text-transform: uppercase;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0e9e0;
`;

const InfoBlock = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  text-decoration: none;
  padding: 15px;
  border-radius: 12px;
  transition: background 0.3s;
  
  &:hover {
    background: #f0e9e0;
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: #ff8c00;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  color: #a0a0a0;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const InfoValue = styled.div`
  color: #3d2c1c;
  font-size: 1.1rem;
  transition: color 0.3s;
`;

const MapWrapper = styled.div`
  flex: 1.2;
  min-height: 500px;

  @media (max-width: 992px) {
    min-height: 400px;
  }
`;

export default function Contacts() {
  return (
    <ContactSection>
      <Container initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <InfoWrapper>
          <Title>Контакты</Title>
          <InfoBlock href="#"><InfoIcon><FaMapMarkerAlt /></InfoIcon><InfoText><InfoLabel>Адрес</InfoLabel><InfoValue>Москва, ул. Технологическая, д. 1</InfoValue></InfoText></InfoBlock>
          <InfoBlock href="tel:+74951234567"><InfoIcon><FaPhoneAlt /></InfoIcon><InfoText><InfoLabel>Телефон</InfoLabel><InfoValue>+7 (495) 123-45-67</InfoValue></InfoText></InfoBlock>
          <InfoBlock href="mailto:support@impulse.tech"><InfoIcon><FaEnvelope /></InfoIcon><InfoText><InfoLabel>Email</InfoLabel><InfoValue>support@impulse.tech</InfoValue></InfoText></InfoBlock>
        </InfoWrapper>
        <MapWrapper>
          <YandexMap />
        </MapWrapper>
      </Container>
    </ContactSection>
  )
}