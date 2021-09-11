import { useState, useEffect } from "react";
import axios from 'axios';
import Coins from "./components/Coins";
import Favourites from "./components/Favourites";

function App() {

  const [ coins, setCoins ] = useState([]);

  const [ favourite, setFavourite ] = useState([], () => {
    const localData = localStorage.getItem('favourite');
    return localData? JSON.parse(localData) : [];
  });

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

  useEffect(() => {

    const storedFavourite = JSON.parse(localStorage.getItem('favourite'))
    if (storedFavourite) setFavourite(storedFavourite)
    
  }, [])

  useEffect(() => {

    localStorage.setItem('favourite', JSON.stringify(favourite))

  }, [favourite]);

  if (!coins) return <p> Loading... </p>

  return (
    <>
      <Favourites favourite={favourite} setFavourite={setFavourite} />
      <Coins koins={koins} favourite={favourite} setFavourite={setFavourite} />
    </>
  );
}

export default App;
