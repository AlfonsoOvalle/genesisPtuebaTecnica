import React from "react";
import CardComponent from "./CardComponent";
import { Container, Table, Spinner } from 'reactstrap';

import '../pages/Estilos.css'
import { customFetchGET } from "../funciones";
import rutaBaseApi from '../Config/Conf'


export default class TasaCambioPromedio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lstTasas: [],
            cargando: false,

        };
    }
    componentDidMount() {
        const fetchData = async () => {
            this.setState({cargando:true})
            const res = await customFetchGET(`${rutaBaseApi}obtenerTasaPromedio`)
            if (res != null || res !== undefined) {
                this.setState({ lstTasas: res.data,cargando:false })
            }
        };
        fetchData();

    }

    setTxtFiltro(texto) {
        const resultado = this.state.lstVariables.filter(item => item.descripcion.toLowerCase().includes(texto.toLowerCase()));
        this.setState({ lstVariablesFiltrada: resultado, filtro: texto })
    }
    render() {
        return (
            //Contenido card 

            <CardComponent
                nombreIconoFontawesome="fas fa-cog"
                cardTitle=" PETICIONES TASA PROMEDIO (Consumo del servicio /obtenerTasaPromedio)"
                cardBody={
                    <Container className="py-3" fluid>



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
                                            Peticion
                                        </th>
                                        <th>
                                            Fecha
                                        </th>
                                        <th>
                                            Hora
                                        </th>
                                        <th>
                                            TC venta
                                        </th>
                                        <th>
                                            TC compra
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        this.state.lstTasas?.map((item, index) => {
                                            return (
                                                <tr key={"tr-" + index} >
                                                    <th key={"tdID-" + index} >
                                                        {item.id_peticion}
                                                    </th>
                                                    <td key={"tdfecha-" + index} >
                                                        {item.fecha ? item.fecha : ""}
                                                    </td>
                                                    <td key={"tdhora-" + index} >
                                                        {item.hora ? item.hora : ""}
                                                    </td>
                                                    <td key={"tdventa-" + index} >
                                                        {item.tasa_venta ? item.tasa_venta : ""}
                                                    </td>
                                                    <td key={"tdcompra-" + index} >
                                                        {item.tasa_compra ? item.tasa_compra : ""}
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