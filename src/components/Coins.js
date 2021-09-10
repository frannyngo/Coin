import { useState } from "react";

const Coins = ({ koins }) => {

    const [ selected, setSelected ] = useState([]);

    const Clicked = (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('id')
        console.log('hi', id)

        setSelected()

        console.log(selected)
    }


    return ( 
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
                { koins.map((coin, key) => {
                    return (
                        <tr key={key} onClick={Clicked}>
                            <td>
                                {coin.id}
                            </td>
                            <td>
                                { coin.total_supply || 'insert value' }
                            </td>
                            <td>
                                { coin.market_cap || 'insert value' }
                            </td>
                            <td>
                                { coin.current_price || 'insert value' }
                            </td>
                        </tr>
                    );
                }) 
                }
           </tbody>
       </table>
    );
}

export default Coins;