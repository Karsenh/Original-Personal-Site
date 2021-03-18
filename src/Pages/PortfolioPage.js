import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuItem from '../components/MenuItem';
import Title from '../components/Title';
import portfolios from '../components/allPortfolios';

// Create an array with unique categories
const allCategories = [
  'All',
  ...new Set(portfolios.map(item => item.category)),
];

function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = category => {
    if (category === 'All') {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter(item => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };
  return (
    <div className='PortfolioPage'>
      <div className='title'>
        <Title title={'Portfolio'} span={'Portfolio'}></Title>
      </div>
      <div className='portfolio-data'>
        <Categories filter={filter} categories={categories} />
        <MenuItem menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfolioPage;
