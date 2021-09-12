import { useState } from "react";
import CoinShow from "./CoinShow";

const Coins = ({ koins, setFavourite, favourite }) => {

    const [ selected, setSelected ] = useState([]);

    const rowClicked = (coin) => {
        
        setSelected(coin);
    };

    if (!koins) return <p> Loading... </p>

    return ( 
    <div className='coinTable'> 
    <div>
        <div className='topOfTable'>
            <h4>
                ALL COINS
            </h4>
        </div>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th className='col1'>
                        Total Supply
                    </th>
                    <th className='col2'>
                        Market Cap
                    </th>
                    <th>
                        Current Price
                    </th>
                </tr>
            </thead>
            <tbody>
                    { koins.map((coin) => {
                        return (
                            <tr key={coin.id} id={coin.id} onClick={() => {rowClicked(coin)}}>
                                <td id={coin.id}>
                                    {coin.id}
                                </td>
                                <td id={coin.id} className='col1'>
                                    { coin.total_supply || 'insert value' }
                                </td>
                                <td id={coin.id} className='col2'>
                                    { coin.market_cap || 'insert value' }
                                </td>
                                <td id={coin.id} className='currentPrice'>
                                    { coin.current_price || 'insert value' }
                                </td>
                            </tr>
                        );
                    }) 
                    }
            </tbody>
        </table>
        { !selected?
            <div className='bottomOfTable'>
                <p>
                    Select a coin to view more information
                </p>
            </div>
        :
            <CoinShow 
            name={selected.name}
            price={selected.current_price}
            cap={selected.market_cap}
            low={selected.low_24h}
            high={selected.high_24h}
            circulating={selected.circulating_supply}
            total={selected.total_supply}
            rank={selected.market_cap_rank} 
            symbol={selected.symbol}
            setFavourite={setFavourite}
            favourite={favourite}
            koins={koins}
            image={selected.image}
            />
        }
        
    </div>
    </div>
    );
}

export default Coins;