import logo from './logo.svg';
import './App.css';
import { shopifyClient, storefrontClient } from './shopifyClients';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await storefrontClient.query({
        data: `{
          shop {
            name
          }
        }`,
      })
      .then(() => {
        console.log('products: ', products)
      })
      .catch(error => console.log('Error getting all products: ', error));
    };

    getAllProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
