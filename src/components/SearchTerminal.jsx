import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'

const SearchSection = styled.section` padding: 100px 10%; background: #FF8C00; `;
const TerminalFrame = styled(motion.div)` position: relative; background: #ffffff; border-radius: 16px; border: 1px solid #FFDAB5; box-shadow: 0 10px 30px rgba(100, 50, 0, 0.1); padding: 40px; @media (max-width: 768px) { padding: 20px; } `;
const TerminalHeader = styled.div` text-align: center; margin-bottom: 30px; color: #856A4F; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; `;
const Screen = styled.div` background: #ffffff;; border-radius: 8px; overflow: hidden; border: 1px solid #FFDAB5; `;
const TabContainer = styled.div` display: flex; background: #ffffff; `;
const TabButton = styled.button` flex: 1; padding: 20px; font-size: 1.1rem; font-weight: 700; text-transform: uppercase; color: #856A4F; background: transparent; border: none; cursor: pointer; border-bottom: 4px solid transparent; transition: all 0.3s; ${props => props.isActive && css` color: #4C3B2B; border-color: #FF8C00; `} `;
const FormContent = styled.div` padding: 40px; `;
const FormGroup = styled.div` display: flex; flex-wrap: wrap; gap: 30px; `;
const InputGroup = styled.div` flex: 1; display: flex; flex-direction: column; gap: 10px; min-width: 200px; `;
const Label = styled.label` font-weight: 600; color: #6e553c; text-transform: uppercase; font-size: 0.9rem; `;
const Input = styled.input` padding: 15px; background: #FFEBD6; border: 1px solid #FFDAB5; border-radius: 8px; color: #4C3B2B; font-size: 1rem; transition: all 0.3s; &::placeholder { color: #856A4F; } &:focus { outline: none; border-color: #FF8C00; box-shadow: 0 0 10px rgba(255, 140, 0, 0.2); } `;
const Select = styled(Input).attrs({ as: 'select' })` cursor: pointer; `;
const SearchButton = styled(motion.button)` display: flex; align-items: center; justify-content: center; gap: 15px; width: 100%; padding: 20px; margin-top: 40px; font-size: 1.2rem; font-weight: 700; text-transform: uppercase; color: #fff; background: #FF8C00; border: none; border-radius: 8px; cursor: pointer; `;
const contentVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }, exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }, };

export default function SearchTerminal() {
  const [activeTab, setActiveTab] = useState('vin');

  return (
    <SearchSection>
      <TerminalFrame initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <TerminalHeader>Диагностический терминал</TerminalHeader>
        <Screen>
            <TabContainer>
                <TabButton isActive={activeTab === 'vin'} onClick={() => setActiveTab('vin')}>Поиск по VIN</TabButton>
                <TabButton isActive={activeTab === 'manual'} onClick={() => setActiveTab('manual')}>Ручной подбор</TabButton>
            </TabContainer>
            <AnimatePresence mode="wait">
                <motion.div key={activeTab} variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                    <FormContent>
                        {activeTab === 'vin' && (
                            <FormGroup>
                                <InputGroup style={{flexGrow: 3}}><Label htmlFor="vin-input">VIN-код (17 знаков)</Label><Input id="vin-input" type="text" placeholder="Введите VIN вашего автомобиля" maxLength="17" /></InputGroup>
                                <InputGroup><Label htmlFor="part-input-vin">Название детали</Label><Input id="part-input-vin" type="text" placeholder="Например, 'тормозной диск'" /></InputGroup>
                            </FormGroup>
                        )}
                        {activeTab === 'manual' && (
                            <FormGroup>
                                <InputGroup><Label htmlFor="make-select">Марка</Label><Select id="make-select"><option>BMW</option><option>Mercedes-Benz</option><option>Audi</option></Select></InputGroup>
                                <InputGroup><Label htmlFor="model-select">Модель</Label><Select id="model-select"><option>X5</option><option>E-Class</option><option>A6</option></Select></InputGroup>
                                <InputGroup><Label htmlFor="year-select">Год выпуска</Label><Select id="year-select"><option>2023</option><option>2022</option><option>2021</option></Select></InputGroup>
                                <InputGroup style={{width: '100%', flex: '1 1 100%'}}><Label htmlFor="part-input-manual">Название детали</Label><Input id="part-input-manual" type="text" placeholder="Например, 'масляный фильтр'" /></InputGroup>
                            </FormGroup>
                        )}
                        <SearchButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}><FaSearch /><span>Найти</span></SearchButton>
                    </FormContent>
                </motion.div>
            </AnimatePresence>
        </Screen>
      </TerminalFrame>
    </SearchSection>
  );
}