import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuPage from './components/MenuPage';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import DisplayProducts from './components/DisplayProducts';
import UpdateProduct from './components/UpdateProduct';

class App extends Component {

  render() {
    return (
       <Router>
        <div>
          
        <MenuPage />
          
          <Route exact path="/" component={Home} />            
            <Route path="/add-product" component={AddProduct} />
            <Route path="/display-products" component={DisplayProducts} />            
            <Route path="/update-product/:id" component={UpdateProduct} />
               

        </div>
      </Router>
    );
  }
}

export default App;
