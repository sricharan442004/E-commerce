import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollections from '../Components/Newcollections/Newcollections';
import NewsLetter from '../Components/NewLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <br/>
      <br/>
      <br/>
      <Newcollections/>
      <NewsLetter/>
      <br/>
      <br/>
      <br/>
      
    </div>
  );
}

export default Shop;
