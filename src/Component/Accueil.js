import React, { useState, useEffect } from 'react';


function Categories() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch("https://swapi.dev/api/")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result);
                // console.log(result);
            },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (


            <div className=" row justify-content-center Accueil">
            {Object.keys(items).map((item, i) => (


                // <li className="travelcompany-input mx-5" key={i}>
                //     <span className="input-label">{item} : {items[item]}</span>
                // </li>
                
                    <div className="card border border border-dark p-0 m-3 col-3 ">
                        <img className="card-img-top" src="https://www.presse-citron.net/app/uploads/2021/01/lucasfilm-games-star-wars.jpg" alt="Card img cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{item}</h5>
                        </div>
                    </div>
                

            ))
    }
    </div >
        )

    }
}

export default Categories;