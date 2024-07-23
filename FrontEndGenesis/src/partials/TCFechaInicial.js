import React from "react";
import CardComponent from "./CardComponent";
import { Container, Table, Row, Col, Button, Spinner } from 'reactstrap';

import '../pages/Estilos.css'
import { customFetchAll } from "../funciones";
import rutaBaseApi from '../Config/Conf'
import Swal2 from "sweetalert2";
import { formatearFecha } from "../funciones";

export default class TCFechaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lstTasas: [],
            cargando: false,
            fechaInicio: null,

        };
    }
    setFechaInicio(texto) {
        this.setState({ fechaInicio: texto })
    }
    async ConsultarTipoCambio() {

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
        this.setState({ lstTasas:[],cargando: true })
        let jsonPeticion = {
            "fechainit": formatearFecha(new Date(this.state.fechaInicio))
        }
        const res = await customFetchAll(`${rutaBaseApi}TipoCambioFechaInicial`, "POST", jsonPeticion)

        if (res != null || res !== undefined) {
            this.setState({ lstTasas: res.data?.vars?.var })
        }
        this.setState({ cargando: false })
    }
    render() {
        return (
            //Contenido card 

            <CardComponent
                nombreIconoFontawesome="fas fa-cog"
                cardTitle=" EXTRA  (Consumo del servicio /TipoCambioFechaInicial)"
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
                                <br></br>
                                <Button color="success" size="sm" onClick={() => { this.ConsultarTipoCambio() }}>
                                    <i className="fas fa-search-dollar"></i> Consultar tipo de cambio
                                </Button>
                            </Col>
                        </Row>
                        <br />

                        <div style={{
                            maxHeight: '400px',
                            overflowY: 'auto'
                        }}>
                            <center>
                                {
                                    this.state.cargando ?
                                        <Spinner color="succes" />
                                        :
                                        <></>
                                }

                            </center>

                            <Table hover className="tblClientes">
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Moneda
                                        </th>
                                        <th>
                                            Fecha
                                        </th>
                                        <th>
                                            Venta
                                        </th>
                                        <th>
                                            Compra
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        this.state.lstTasas?.map((item, index) => {
                                            return (
                                                <tr key={"tr-" + index} >
                                                    <th key={"tdID-" + index} >
                                                        {index}
                                                    </th>
                                                    <td key={"tdfecha-" + index} >
                                                        {item.moneda ? item.moneda : ""}
                                                    </td>
                                                    <td key={"tdhora-" + index} >
                                                        {item.fecha ? item.fecha : ""}
                                                    </td>
                                                    <td key={"tdventa-" + index} >
                                                        {item.venta ? item.venta : ""}
                                                    </td>
                                                    <td key={"tdcompra-" + index} >
                                                        {item.compra ? item.compra : ""}
                                                    </td>
                                                </tr>
                                            )
                                        })


                                    }
                                </tbody>
                            </Table>
                        </div>

                    </Container>
                }
            />

        );
    }
}