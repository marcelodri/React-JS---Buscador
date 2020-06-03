import React from 'react';


export default function Mostrar (props) {
    const {busqueda} = props;

    return (
        <div className="contenedor1">
            {       // cada items
                busqueda.map((e, index) => {
                    return (
                        <div className="card" id="cardMovie"  key={index}>
                            <div className="card-image">
                                <figure className="image is-10x10">
                                <img src={(e.Poster === "N/A") ? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" : e.Poster} alt="Disculpe. No Hay Imagen"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{e.Title}</p>
                                        <p className="subtitle is-6">{e.Year}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a></a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                                <br/>
                                </div>
                            </div>
                        </div>
                    ) 
                })
            }
        </div>
    )

    


}





