import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Features from './components/Features'
import SearchTerminal from './components/SearchTerminal'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import CategoryPage from './components/CategoryPage' // <-- Наш новый компонент

const AppContainer = styled.div``;

// Создаем компонент для главной страницы
const HomePage = () => (
  <>
    <Hero />
    <Catalog />
    <Features />
    <SearchTerminal />
    <Contacts />
    <Footer />
  </>
);

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:categoryId" element={<CategoryPage />} />
      </Routes>
    </AppContainer>
  )
}

export default App