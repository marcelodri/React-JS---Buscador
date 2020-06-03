import React, {useState} from 'react';
import Mostrar from './View';

const API_KEY = "9eb6af30";

export default function Buscador () {
    const [inputMovie, setInputMovie] = useState ();
    const [busqueda, setBusqueda] = useState ([]);


    function click () {
        if(inputMovie === undefined){
            alert("Debe ingresar una pelicula")
         } else { 
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
         .then(e => e.json())
         .then( results => {
            (results.Response === "True")
                ? setBusqueda(results.Search)
                : alert (`Error: ${results.Error}`)
         })
        }
    }

    return (
        <div className="contenedor">
            <div className="control">
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nombre de la Pelicula"
                    onChange={event => setInputMovie(event.target.value)}
                />
                <button 
                    className="button is-info"
                    onClick={click}
                    >
                    Search
                </button>
            </div>
            <div>
                <Mostrar busqueda={busqueda}/>
            </div>
        </div>
    )
}


 
