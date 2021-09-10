
const CoinShow = ({ koins }) => {

    return (
        <div className='show'>

            <div className='info'>
                <div className='title'>
                    <h4>
                        selected coin title
                    </h4>
                </div>
                <p>
                    CURRENT PRICE: 
                </p>
                <p>
                    MARKET CAP: 
                </p>
                <p>
                    LOW 24H: 
                </p>
                <p>
                    HIGH 24H: 
                </p>
                <p>
                CIRCULATING SUPPLY: 
                </p>
                <p>
                    TOTAL SUPPLY: 
                </p>
                <p>
                    MARKET CAP RANK: 
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