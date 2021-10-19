import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Products from './Products';


function Home() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Footer/>
    </div>   
  );
}

export default Home;
