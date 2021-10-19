import React from 'react';
import data from '../api/products/products.json'
import Product from '../components/product';

function Products() {
  return (
    <div className="App">
      {
      data.map((e) => {
        return <Product key={e.id} title={e.title} description={e.description} image={e.image}/>
      })
      }
    </div>
  );
}

export default Products;
