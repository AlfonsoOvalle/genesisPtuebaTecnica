import React from "react";
import '../pages/Cpanel.css'

import foto from '../assets/img/Foto.jpg'

import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import { isMobile } from 'react-device-detect';

import EstructuraMenu from "../Config/Menu";

/*Pages*/
import Home from "../partials/Home";
import Notfound from "../partials/Notfound";

export default class Cpanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: isMobile,
            lstPermisos: [],
            isready: false
        }
    }

    toggleSidebar() {
        this.setState({ showSidebar: !this.state.showSidebar });
    }
    CerrarSesion() {

    }


    componentDidMount() {
    }
    render() {
        return (
            <BrowserRouter>
                <div className="rootContainer">
                    <div className={`sidebar ${this.state.showSidebar ? "oculto" : "visible"}`}>
                        <div className="headerSidebar">
                            
                            <span className="spanSidebar">GENESIS</span>
                        </div>
                        <div className="contentSidebar">
                            <div className="menuSidebar">
                                <div className="encabezadoMenu">
                                    <span className="colorIcono"><i className="fas fa-th-large " /> MENU PRINCIPAL</span>
                                </div>
                                <ul id="menu">
                                    {
                                        EstructuraMenu.map((item, index) => {
                                            if (!this.state.lstPermisos.includes("" + item.id)) {
                                                return (
                                                    <li key={"li-" + index} > <NavLink key={"NavLink-" + index} to={item.ruta} activeClassName="activeLink"><i key={"i-" + index} className={item.iconoFas5} />{item.titulo}</NavLink> </li>
                                                )
                                            } else {
                                                return (null)
                                            }
                                        })
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="headerMain">
                            <i className="fas fa-bars btnLink colorIcono SizeIconoMD" id="btnmenu" onClick={() => { this.toggleSidebar() }}></i>

                            <div className="dropDown1">
                                <div className="dropDownHeader1">
                                    <i className="fas fa-angle-down" id="flechaicon"> </i>
                                    <span className="spanNameUser">{this.props.datosUser.displayName ? this.props.datosUser.displayName : this.props.datosUser.email}</span>
                                    {
                                        this.props.datosUser.photoURL ?
                                            <img src={this.props.datosUser.photoURL} alt="fotografia" className="imgUser" />
                                            :
                                            <i className="fas fa-user-circle colorIcono SizeUserPhoto"> </i>
                                    }
                                </div>
                                <div className="dropDownContent1">
                                    <div className="dropSubContenido">
                                       <img src={foto} alt="fotografia" className="fotoPerfil" />
                                        <strong><span>DENIS MORALES OVALLE</span></strong>
                                        <span>DESARROLLADOR DE SISTEMAS</span>
                                        <span>alfonso200925014@gmail.com</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contentMain">
                            <Switch>
                                {
                                    /*Rutas X Rol de Usario*/
                                    EstructuraMenu.map((item, index) => {
                                        if (!this.state.lstPermisos.includes("" + item.id)) {
                                            return (
                                                <Route key={"Route-" + index} exact={item.exact} path={item.ruta} component={item.componente} />
                                            )
                                        } else {
                                            return (null)
                                        }

                                    })

                                }
                                <Route exact={true} path="/" component={Home} />
                                <Route exact={true} path="*" component={Notfound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}