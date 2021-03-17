import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuItem from '../components/MenuItem';
import Title from '../components/Title';
import portfolios from '../components/allPortfolios';

function PortfolioPage() {
  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState(portfolios);
  return (
    <div className='PortfolioPage'>
      <div className='title'>
        <Title title={'Portfolio'} span={'Portfolio'}></Title>
      </div>
      <div className='portfolio-data'>
        <Categories />
        <MenuItem menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfolioPage;
