
import './App.css';
import Navigation from './component/navigationBar/Navigation';
import Intro from './component/Intro/Intro';
import Product from './component/product/Product';
import Footer from './component/footer/Footer';
function App() {
  return (
    <div className="App">
 <Navigation></Navigation>
 <Intro></Intro>
 <Product></Product>
 <Footer></Footer>
    </div>
  );
}

export default App;
