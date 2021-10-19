import React, { useEffect, useState } from 'react';

import data from '../api/products/products.json'
import aske from '../api/ask/ask.json'

import getIdFromProducts from '../ultils/getIdFromProducts';
import Comment from '../components/comment';
import { useParams } from 'react-router';

function Forum() {
  
  let {id} = useParams()


  const [ask, setAsk] = useState([]);
  const [product, setProduct] = useState({});
  
  async function asker() {
    setAsk(aske)
  }

  async function setingProduct() {
    const prod = getIdFromProducts(data,id)
    setProduct(prod)
  }

  useEffect(() => {
    setingProduct()
    asker()
  }, []);

  return (
    <div>
      <h4>
        {product.title}
      </h4>
      <h4>
        {product.description}
      </h4>

      {
       ask.map((e) => {
         return (e.id_product == id)? <Comment key={e.answer} answer={e.answer} /> : ''
       })
      }
      
    </div>
  );
}


export default Forum;
