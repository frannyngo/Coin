
const CoinShow = ({ koins, name, price, cap, low, high, circulating, total, rank }) => {

    return (
        <div className='show'>

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
                    <button>
                        add to favourite
                    </button>
                </div>
            </div>

            <form>
                <div className='buy'>
                    <button>
                        BUY
                    </button>
                    <button>
                        SELL
                    </button>
                    <p>
                        select
                    </p>
                    <p>
                        amount
                    </p>
                    <button>
                        SUBMIT
                    </button>
                </div>


            </form>

        </div>
    );
}

export default CoinShow;