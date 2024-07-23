import React from "react";
import CardComponent from "./CardComponent";
import { Col, Container, Row, Button } from 'reactstrap';
import Swal2 from "sweetalert2";

import { customFetchAll,obtenerHoraActual,formatearFecha, formatearFecha2 } from "../funciones";
import rutaBaseApi from '../Config/Conf'


export default class TCambio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fechaInicio: null,
            fechaFin: null,
            promedioCompra: null,
            promedioVenta: null


        };
    }
    setFechaInicio(texto) {
        this.setState({ fechaInicio: texto })
    }
    setFechaFin(texto) {
        this.setState({ fechaFin: texto })
    }

    async ConsultarTipoCambio() {
        this.setState({promedioCompra:null,promedioVenta:null})
        if (this.state.fechaInicio === null) {
            Swal2.fire(
                {
                    title: "Tipo de cambio",
                    text: "Seleccione una fecha inicial valida",
                    icon: "error",
                    confirmButtonColor: '#DC3545'
                });
            return
        }
        if (this.state.fechaFin === null) {
            Swal2.fire(
                {
                    title: "Tipo de cambio",
                    text: "Seleccione una fecha final valida",
                    icon: "error",
                    confirmButtonColor: '#DC3545'
                });
            return
        }
        let jsonPeticion = {
            "fechainit": formatearFecha(new Date(this.state.fechaInicio)),
            "fechafin": formatearFecha(new Date(this.state.fechaFin))
        }
        const res = await customFetchAll(`${rutaBaseApi}TipoCambioRango`, "POST", jsonPeticion)

        let totalCompra = 0
        let totalVenta = 0
        res.data?.vars?.var.forEach(element => {
            totalCompra += element.compra
            totalVenta += element.venta
        });
        let promedioCompra= totalCompra/res.data?.vars?.var.length
        let promedioVenta=totalVenta/res.data?.vars?.var.length
        this.setState({promedioCompra:promedioCompra, promedioVenta:promedioVenta})

        let jsonPeticionAgregarTasa ={
            "fecha":formatearFecha2(new Date()),
            "hora":obtenerHoraActual(),
            "tasa_venta":promedioVenta?.toFixed(4),
            "tasa_compra":promedioCompra?.toFixed(4)
        }

        
         await customFetchAll(`${rutaBaseApi}agregarTasaPromedio`, "POST", jsonPeticionAgregarTasa)
    }


    render() {
        return (
            //Contenido card 

            <CardComponent
                nombreIconoFontawesome="fas fa-money-bill-wave"
                cardTitle=" TIPO CAMBIO (Consumo del servicio /TipoCambioRango)"
                cardBody={
                    <Container className="py-3" fluid>
                        <Row className="py-1">
                            <Col>
                                Fecha Inicio<br></br>
                                <input aria-label="Date" type="date"
                                    dateFormat="dd-MM-yyyy"
                                    onChange={(text) => { this.setFechaInicio(text.target.value) }}
                                />
                            </Col>
                            <Col>
                                Fecha Fin<br></br>
                                <input aria-label="Date" type="date"
                                    dateFormat="dd-MM-yyyy"
                                    onChange={(text) => { this.setFechaFin(text.target.value) }}
                                />
                            </Col>
                            <Col>
                                <br></br>
                                <Button color="success" size="sm" onClick={() => { this.ConsultarTipoCambio() }}>
                                    <i className="fas fa-search-dollar"></i> Consultar tipo de cambio
                                </Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="py-1">
                            <Col>
                                <h4>Promedio Tasa Compra</h4>
                                <strong>{this.state?.promedioCompra?.toFixed(4)}</strong>
                            </Col>
                            <Col>
                                <h4>Promedio Tasa Venta</h4>
                                <strong>{this.state?.promedioVenta?.toFixed(4)}</strong>
                            </Col>
                        </Row>
                    </Container>
                }
            />

        );
    }
}