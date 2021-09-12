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
    <div className='tableContainer'>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th className='col1' id='tableData'>
                        Total Supply
                    </th>
                    <th className='col2' id='tableData'>
                        Market Cap
                    </th>
                    <th id='tableData'>
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
                                <td id={coin.id} className='col1' id='tableData'>
                                    { coin.total_supply || 'insert value' }
                                </td>
                                <td id={coin.id} className='col2' id='tableData'>
                                    { coin.market_cap || 'insert value' }
                                </td>
                                <td id={coin.id} className='currentPrice' id='tableData'>
                                    { coin.current_price || 'insert value' }
                                </td>
                            </tr>
                        );
                    }) 
                    }
            </tbody>
        </table>
    </div>
        { selected.length === 0 ?
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