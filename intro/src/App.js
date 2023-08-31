import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';


function App() {
  return (
    <div className="App">
      <Navi/>
      <CategoryList/>
      Something else
      <ProductList/>
    </div>
  );
}

export default App;
