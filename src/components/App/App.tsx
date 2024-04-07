import { useState } from 'react';

import Header from '../Header/Header';

import './App.scss';
import Products from '../Products/Products';

import Product from '../../@types/product';
import produits from '../../produits';
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn';

function App() {
  const [productsToBuy, setProductsToBuy] = useState<Product[]>(produits);
  const [inputProductValue, setInputProductValue] = useState('');
  const [isDark, setIsDark] = useState(false);
  const updateStatus = (id: number) => {
    const state = productsToBuy.map((product) => {
      if (product.id !== id) return product;

      product.bought = !product.bought;

      return product;
    });

    setProductsToBuy(state);
  };

  

  const addProduct = (newProduct: string) => {
    const state = [...productsToBuy];
    state.push({
      id: Math.floor(Math.random() * 1000),
      label: newProduct,
      bought: false,
    });

    setProductsToBuy(state);
  };

  const deleteProduct = (id: number) => {
    const state = productsToBuy.filter((product) => product.id !== id);

    setProductsToBuy(state);
  };

  return (
    


    <div className={isDark ? 'App App--dark' : 'App'}>
      <DarkModeBtn setIsDark={setIsDark} isDark={isDark} />
        

      <Header
        inputProductValue={inputProductValue}
        setInputProductValue={setInputProductValue}
        addProduct={addProduct}
      />
      <Products
        productsToBuy={productsToBuy}
        updateStatus={updateStatus}
        deleteProduct={deleteProduct}
      />
    </div>
  );

};
export default App;