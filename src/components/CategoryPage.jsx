import React from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { categories } from '../data'
import { products, partTypes } from '../productsData'
import Footer from './Footer'
import { FaArrowLeft } from 'react-icons/fa'

const PageWrapper = styled.div`
  background: #FFFFFF;
`;

const Header = styled.header`
  padding: 100px 10% 50px;
  background: #FFFFFF;
`;

const BackLink = styled(RouterLink)`
  color: #856A4F; text-decoration: none; font-weight: 600; margin-bottom: 20px;
  display: inline-flex; align-items: center; gap: 10px;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; text-transform: uppercase; color: #3a2a1a;
`;

const Content = styled.div`
  display: flex; padding: 50px 10%; gap: 40px;
  @media (max-width: 992px) { flex-direction: column; }
`;

const Sidebar = styled.aside`
  flex: 0 0 280px;
`;

const FilterGroup = styled.div`
  margin-bottom: 30px; background: #FFF5E6; padding: 20px; border-radius: 8px;
  border: 1px solid #FFDAB5;
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem; font-weight: 700; color: #3a2a1a; margin-bottom: 15px;
`;

const Select = styled.select`
  width: 100%; padding: 10px; border: 1px solid #FFDAB5; border-radius: 8px;
  background: #FFEAD6; color: #4C3B2B; font-size: 1rem;
`;

const CheckboxGroup = styled.div`
  display: flex; flex-direction: column; gap: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex; align-items: center; gap: 10px; cursor: pointer; color: #4C3B2B;
`;

const CheckboxInput = styled.input`
  width: 20px; height: 20px;
`;

const ProductGrid = styled(motion.div)`
  flex: 1; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;
`;

const ProductCard = styled(motion.div)`
  background: #FFF5E6; border-radius: 8px; border: 1px solid #FFDAB5;
  overflow: hidden; display: flex; flex-direction: column;
`;

const CardImageWrapper = styled.div`
  width: 100%; height: 250px; padding: 20px;
  display: flex; align-items: center; justify-content: center;
  background: #fff;
`;

const CardImage = styled.img`
  max-width: 100%; max-height: 100%; object-fit: contain;
`;

const CardContent = styled.div`
  padding: 20px; flex-grow: 1; display: flex; flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem; font-weight: 700; color: #3a2a1a;
`;

const StockStatus = styled.span`
  font-size: 0.8rem; font-weight: 700; text-transform: uppercase; padding: 4px 8px;
  border-radius: 4px; white-space: nowrap;
  ${props => props.inStock
    ? css` background: #388E3C; color: #fff; `
    : css` background: #D32F2F; color: #fff; `
  }
`;

const CardArticle = styled.p`
  font-size: 0.9rem; color: #856A4F; font-family: 'Fira Code', monospace; margin-bottom: 20px;
`;

const CardFooter = styled.div`
  margin-top: auto; display: flex; justify-content: space-between; align-items: center;
`;

const CardPrice = styled.p`
  font-size: 1.5rem; font-weight: 800; color: #FF8C00;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px; font-size: 1rem; font-weight: 600; color: #fff; background: #FF8C00;
  border: none; border-radius: 8px; cursor: pointer;
`;

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.id === categoryId);
  const filteredProducts = products.filter(prod => prod.category === categoryId);
  const typesForCategory = partTypes[categoryId] || [];

  return (
    <PageWrapper>
      <Header>
        <BackLink to="/"><FaArrowLeft /> На главную</BackLink>
        <Title>{category ? category.name : 'Категория'}</Title>
      </Header>
      <Content>
        <Sidebar>
          <FilterGroup>
            <FilterTitle>Подбор по авто</FilterTitle>
            <Select><option>Марка</option><option>BMW</option></Select>
            <Select style={{marginTop: '10px'}}><option>Модель</option><option>X5</option></Select>
            <Select style={{marginTop: '10px'}}><option>Год</option><option>2023</option></Select>
          </FilterGroup>
          <FilterGroup>
            <FilterTitle>Тип детали</FilterTitle>
            <CheckboxGroup>
                {typesForCategory.map(type => (
                    <CheckboxLabel key={type}>
                        <CheckboxInput type="checkbox" />
                        <span>{type}</span>
                    </CheckboxLabel>
                ))}
            </CheckboxGroup>
          </FilterGroup>
        </Sidebar>
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} layout>
              <CardImageWrapper><CardImage src={product.image} alt={product.name} /></CardImageWrapper>
              <CardContent>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <StockStatus inStock={product.inStock}>{product.inStock ? 'В наличии' : 'Нет'}</StockStatus>
                </CardHeader>
                <CardArticle>Артикул: {product.article}</CardArticle>
                <CardFooter>
                  <CardPrice>{product.price}</CardPrice>
                  <AddToCartButton>В корзину</AddToCartButton>
                </CardFooter>
              </CardContent>
            </ProductCard>
          ))}
        </ProductGrid>
      </Content>
      <Footer />
    </PageWrapper>
  );
}