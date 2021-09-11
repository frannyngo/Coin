const Favourites = ({ favourite, setFavourite }) => {

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
                        <button className='faveButtons' data-text='REMOVE' key={f} id={f} 
                            onClick={() => Remove(f)}
                        >
                            { f }
                        </button>
                    )
                })
            }
        </div>
    );
}

export default Favourites;