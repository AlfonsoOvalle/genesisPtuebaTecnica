import React from "react";
import CardComponent from "./CardComponent";
//import logo from '../assets/img/Promoline.jpeg'
import logo from '../assets/img/logo-genesis-azul.png'


export default class Home extends React.Component {
    render() {
        return (
            //Contenido card 

            <CardComponent
                nombreIconoFontawesome="fas fa-home"
                cardTitle=" Inicio"
                cardBody={
                    <div className="ardbody centerContent">
                        <img src={logo} alt="logo" style={{ width: "400px",height:"400px", padding:10}} />
                    </div>
                        
                }
            />

        );
    }
}