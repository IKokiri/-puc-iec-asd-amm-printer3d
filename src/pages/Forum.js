import React, { useEffect, useState } from 'react';

import data from '../api/products/products.json'
import aske from '../api/ask/ask.json'

import getIdFromProducts from '../ultils/getIdFromProducts';
import Comment from '../components/comment';
import { useParams } from 'react-router';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Forum() {
  
  let {id} = useParams()


  const [ask, setAsk] = useState([]);
  const [product, setProduct] = useState({});
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  
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

  const saveProduct = () => {
    const obj = {
        "id_product": id,
        "name": name,
        "answer":comment
      }
    
    aske.push(obj)
      console.log(aske)
      setAsk(aske)
      setComment('')
  }
  return (
    <div style={{"margin":"10px"}}>
      <h4>
        {product.title}
      </h4>
      <h4>
        {product.description}
      </h4>

      {
       ask.map((e) => {
         return (e.id_product == id)? <Comment key={e.answer} name={e.name} answer={e.answer} /> : ''
       })
      }

      <TextField 
          style={{"marginBottom":"5px"}}
          id="outlined-basic" 
          label="Nome"
          fullWidth 
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          variant="outlined" />

      <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Seu Commentário"
          multiline
          value={comment}
          rows={4}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />

      
      
      <Button onClick={() => saveProduct()} style={{"marginTop":"5px"}} fullWidth variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
}


export default Forum;
