import React from "react";

const Imagen = (props) => {

    const {card_images, card_prices, desc, name, type} = props.datos;
    //console.log(card_prices)

    return(
        <div className="col-12 col-sm6 mb-4 col-lg-3 mb-4">
            <div className="card">
                <img src={card_images[0]['image_url']} alt={name} className="card-img-top"/>
                <div className="card-body d-grid gap-2">
                    <p className="card-text"><b>Nombre: </b>{name} </p>
                    <p className="card-text"><b>Tipo: </b>{type} </p>
                    <p className="card-text"><b>Precio: </b> ${card_prices[0]['amazon_price']} </p>
                    <p className="card-text"><b>Descripcion: </b> {desc} </p>
                    <a href={card_images[0]['image_url']} target="_blank" className="btn btn-secondary btn-block">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;