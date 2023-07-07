import './App.css';
import { Routes , Route } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Titr } from './components/Titr/titr';
import { Products } from './components/Products/products';
import { Email } from './components/Email/email';
import { Footer } from './components/Footer/Footer';
import { Product } from './components/Product/Product';
import { Cart } from './components/Cart/cart';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>

        <Route exact path='/' element={<> <Titr/> <Products/> <Email/> </>}/>
        <Route exact  path='/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
