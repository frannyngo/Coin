import { useState } from 'react'

const CoinShow = ({ favourite, setFavourite, symbol,  koins, name, price, cap, low, high, circulating, total, rank }) => {

    const [ buy, setBuy ] = useState();
    const [ sell, setSell ] = useState();
    const [ selectCurrency, setSelectCurrency ] = useState();
    const [ amount, setAmount ] = useState();
    const [ receipt, setReceipt ] = useState();

    const numbers = [];

    for (let i = 0; i <= 100; i++) {
        numbers.push([i]);
    };

    const Buy = (e) => {
        e.preventDefault();

        setBuy(true);
        setSell(false);
    };

    const Sell = (e) => {
        e.preventDefault();

        setBuy(false);
        setSell(true)
    };

    const HandleAmount = (e) => {
        e.preventDefault();

        const chosen = e.target.value
        setAmount(chosen);
    };

    const HandleChange = (e) => {
        e.preventDefault()
        
        const chosen = e.target.value
        const info = koins.filter((coi) => {
            return coi.name === chosen
        });

        setSelectCurrency(info);
    };

    const Add = (e) => {
        e.preventDefault();

        const duplicate = favourite.find((fave) => {
            if (fave === name) return true 
        });

        if (!duplicate) {
            setFavourite([...favourite, name])
        };
    };

    const Submit = (e) => {
        e.preventDefault();
    
        if (buy === true && sell === false) {
            let difference = 0
            
            difference = (selectCurrency[0].current_price * amount) / price
            console.log(difference)
            setReceipt(`You Have Purchased ${amount} ${selectCurrency[0].symbol} for ${difference} ${symbol}`);
        } else if (buy === false && sell === true) {
            let difference = 0

            difference = (selectCurrency[0].current_price * amount) / price
            setReceipt(`You Have Sold ${amount} ${selectCurrency[0].symbol} for ${difference} ${symbol}`);
        }
    };

    return (
        <div className='show'>
            { name?
            <>
                <div className='info'>
                    <div className='title'>
                        <h4>
                            { name }
                        </h4>
                    </div>
                    <p>
                        CURRENT PRICE: ${ price }
                    </p>
                    <p>
                        MARKET CAP: { cap }
                    </p>
                    <p>
                        LOW 24H: { low }
                    </p>
                    <p>
                        HIGH 24H: { high }
                    </p>
                    <p>
                        CIRCULATING SUPPLY: { circulating } 
                    </p>
                    <p>
                        TOTAL SUPPLY: { total }
                    </p>
                    <p>
                        MARKET CAP RANK: { rank }
                    </p>
                    <div className='favourite'>
                        <button onClick={Add}>
                            add to favourite
                        </button>
                    </div>
                </div>

                <form>
                    <div className='buy'>
                        <button onClick={Buy}>
                            BUY
                        </button>
                        <button onClick={Sell}>
                            SELL
                        </button>
                    </div>
                    <div className='selector'>
                        <select value={selectCurrency} onChange={HandleChange}>
                        {   
                        koins.map((coin) => {
                            return (
                                    <option key={coin.name} 
                                        value={coin.name}
                                        >
                                        {coin.name}
                                    </option>
                            );
                        })
                        }
                        </select>
                        <select value={amount} onChange={HandleAmount}>
                            {
                                numbers.map((num) => {
                                    return (
                                        <option key={num} 
                                        value={num}
                                        >
                                        {num}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div className='formButton'>
                        <button onClick={Submit}>
                            SUBMIT
                        </button>
                    </div>
                </form>
                <div className='receipt'>
                        {receipt}
                </div>
            </>
            :
            <p>
                &emsp;
            </p>
            }
        </div>
    );
}

export default CoinShow;