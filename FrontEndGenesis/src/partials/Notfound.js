import React from "react";
import {getFechaActual} from '../funciones'
import imgNotFound from '../assets/img/not_found.svg'


export default class Notfound extends React.Component {
    render() {
        return (
            //Contenido card 
            <div className="myCard">
                <div className="cardheader">
                    <div>
                        <i className="fas fa-frown-open fontSizeMd"> </i>
                        
                    </div>
                    <div>
                        {getFechaActual()}
                    </div>
                </div>
                <div className="cardbody centerContent">
                    <img src={imgNotFound} alt="fotografia" className="imgUser1" />
                    <span className="lblNameUser fontSizeMd">PÁGINA NO ENCONTRADA.</span>
                </div>
            </div>

        );
    }
}