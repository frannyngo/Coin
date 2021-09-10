const Favourites = ({ favourite, setFavourite }) => {

    const Remove = (f) => {

        const delet = favourite.filter((data) => {
            return data !== f 
        });

        setFavourite(delet);
    }

    return (
        <>
            <h3>
                Favourite Coins
            </h3>

                { 
                    !favourite? 
                        <small>
                            'No Favourite Coins Added Yet'
                        </small>
                    :

                        favourite.map((f) => {
                            return (
                                <button key={f} id={f} 
                                    onClick={() => Remove(f)}
                                    >
                                    { f }
                                </button>
                            )
                        })
                }
        </>
    );
}

export default Favourites;