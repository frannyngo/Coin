import { useState } from "react";
import CoinShow from "./CoinShow";

const Coins = ({ koins, setFavourite, favourite }) => {

    const [ selected, setSelected ] = useState([]);

    const rowClicked = (coin) => {
        
        setSelected(coin);
    };

    if (!koins) return <p> Loading... </p>

    return ( 
    <>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Total Supply
                    </th>
                    <th>
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
                                <td id={coin.id}>
                                    { coin.total_supply || 'insert value' }
                                </td>
                                <td id={coin.id}>
                                    { coin.market_cap || 'insert value' }
                                </td>
                                <td id={coin.id}>
                                    { coin.current_price || 'insert value' }
                                </td>
                            </tr>
                        );
                    }) 
                    }
            </tbody>
        </table>
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
        />
    </>
    );
}

export default Coins;