import Header from 'components/Header';
import ProductFeature from 'features/Product';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';



function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();

      console.log(productList);
    }

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature}/>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
