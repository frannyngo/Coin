import { useState } from 'react';

import Bitcoin from './img/Bitcoin.png';
import BitcoinCash from './img/BitcoinCash.png';
import Ethereum from './img/Ethereum.png';
import Litecoin from './img/Litecoin.png';
import XRP from './img/XRP.png';

const Favourites = ({ favourite, setFavourite }) => {
    
    const imageReference = { 'Bitcoin': Bitcoin, 'Bitcoin Cash': BitcoinCash, 'Ethereum': Ethereum, 'XRP': XRP, 'Litecoin': Litecoin }

    const Remove = (f) => {

        const delet = favourite.filter((data) => {
            return data !== f 
        });

        setFavourite(delet);
    }

console.log(favourite)
    return (
        <div className='head'>
            <h3>
                Favourite Coins
            </h3>

                { favourite.length === 0? 
                    <small>
                        No Favourite Coins Added Yet
                    </small>
                :

                favourite.map((f) => {
                    return (
                        <button className='faveButtons' 
                            data-text='REMOVE' 
                            key={f} id={f} 
                            onClick={() => Remove(f)}
                                >
                            <img src={imageReference[f]} 
                                alt='hi' 
                                className='logo'
                                /> 
                                { f }
                        </button>
                    )
                })
            }
        </div>
    );
}

export default Favourites;