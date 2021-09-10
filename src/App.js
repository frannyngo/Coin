import { useState, useEffect } from "react";
import axios from 'axios';
import Coins from "./components/Coins";


function App() {

  const [ coins, setCoins ] = useState([]);

  const koins = coins.filter((c) => {
      if (c.id === 'bitcoin' ||  c.id === 'ethereum' ||  c.id === 'ripple' ||  c.id === 'bitcoin-cash'  || c.id === 'litecoin') {
          return true
      }
   });

  useEffect(() => {

      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad')
          .then(response => {
              setCoins(response.data)
          }).catch(error => {
              console.log(error)
          });

  }, []);

  if (!coins) return <p> Loading... </p>

  return (
    <>
      <Coins koins={koins} />
    </>
  );
}

export default App;
