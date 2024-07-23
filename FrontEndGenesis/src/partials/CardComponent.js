import React from "react";
import {getFechaActual} from '../funciones'


const CardComponent = (props) => {
    //Contenido card 
    return (
        <div className="myCard sombra">
            <div className="cardheader">
                <div>
                    <i className={`fontSizeMd ${props.nombreIconoFontawesome}`}> </i>
                    <span className="lblNameUser fontSizeMd"> {props.cardTitle}</span>
                </div>
                <div>
                    {getFechaActual()}
                </div>
            </div>
            <div className="cardbody">
                {
                    props.cardBody
                }
            </div>
        </div>
    );

}

export default CardComponent;