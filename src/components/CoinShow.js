import { useState } from 'react'

const CoinShow = ({ favourite, setFavourite, image, symbol,  koins, name, price, cap, low, high, circulating, total, rank }) => {

    const [ buy, setBuy ] = useState();
    const [ sell, setSell ] = useState();
    const [ selectCurrency, setSelectCurrency ] = useState();
    const [ amount, setAmount ] = useState();
    const [ receipt, setReceipt ] = useState();
    const [ info, setInfo ] = useState();

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
        setInfo(koins.filter((coi) => {
            return coi.name === chosen
        }));

        setSelectCurrency(chosen);
    };

    const Add = (e) => {
        e.preventDefault();

        const duplicate = favourite.find((fave) => {
            if (fave === symbol) return true 
        });

        if (!duplicate) {
            setFavourite([...favourite, symbol])
        };
    };

    const Submit = (e) => {
        e.preventDefault();
    
        if (buy === true && sell === false) {
            let difference = 0
            
            difference = (info[0].current_price * amount) / price
            console.log(difference)
            setReceipt(`You Have Purchased ${amount} ${info[0].symbol} for ${difference} ${symbol}`);
        } else if (buy === false && sell === true) {
            let difference = 0

            difference = (info[0].current_price * amount) / price
            setReceipt(`You Have Sold ${amount} ${info[0].symbol} for ${difference} ${symbol}`);
        }
    };

    return (
        <div className='show'>
            { name?
            <>
                <div className='info'>
                    <div className='title'>
                        <h4>
                            <img src={image} className='logo' alt='image'/> { `${name} (${symbol})` }
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
                        <small onClick={Add}>
                            + add to favourite
                        </small>
                    </div>
                </div>

                <form>
                    <div className='buy'>
                        <button onClick={Buy}>
                            BUY
                        </button>
                        &emsp;
                        <button onClick={Sell}>
                            SELL
                        </button>
                    </div>
                    <div className='selector'>
                        <select value={selectCurrency} onChange={HandleChange}>
                            <option disabled selected> Select Trade Currency </option>
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
                        <select className='bottomSelector' value={amount} onChange={HandleAmount}>
                            <option disabled selected> Amount </option>
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
                        <div>
                            <button onClick={Submit}>
                                SUBMIT
                            </button>
                        </div>
                        <div className='receipt'>
                            {receipt}
                        </div>
                    </div>
                </form>
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