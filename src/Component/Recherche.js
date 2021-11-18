import React, { useState, useEffect } from 'react';



function Recherche() {
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);
      const [input, setInput] = useState('1');


      useEffect(() => {
            console.log(input)
            fetch(`https://swapi.dev/api/people/${input}/`)
                  .then(res => res.json())
                  .then((result) => {
                        setIsLoaded(true);
                        setItems(result);
                  },

                        (error) => {
                              setIsLoaded(true);
                              setError(error);
                        }
                  )
      }, [input])


      if (error) {
            return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
            return <div>Chargement...</div>;
      } else {
            if (input.length !== 0) {
                  return (
                        <div className="row justify-content-center m-3 p-2">
                              <form className="mb-3">
                                    <input
                                          className="form-control"
                                          type="number"
                                          placeholder="Rechercher un personnage"
                                          aria-label="Search"
                                          // value={input}
                                          onInput={e => setInput(e.target.value)}
                                    />
                              </form>
                              {
                                    Object.keys(items).map((item, i) => (
                                          <ul className="m-2" key={i}>
                                                <li><b>{item}</b> : {items[item]}</li>
                                          </ul>
                                    ))
                              }
                        </div>
                  )
            }

            else {
                  return (

                        <div className="row justify-content-center m-3 p-2">

                              <form className="mb-3">
                                    <input
                                          className="form-control"
                                          type="number"
                                          placeholder="Rechercher un personnage"
                                          aria-label="Search"
                                          // value={input}
                                          onInput={e => setInput(e.target.value)}
                                    />
                              </form>

                              {
                                    setInput('1')
                              }


                        </div>

                  )
            }

      }
}

export default Recherche;