import React from "react";
import CardComponent from "./CardComponent";
import { Col, Container, Row, Table,Spinner } from 'reactstrap';

import '../pages/Estilos.css'
import { customFetchGET } from "../funciones";
import rutaBaseApi from '../Config/Conf'


export default class VARIABLES extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lstVariables: [],
            lstVariablesFiltrada: [],
            filtro: '',
            nombre: '',
            editando: false,
            correo: '',
            openModal: false,
            cargando: false,

        };
    }
    componentDidMount() {
        const fetchData = async () => {
            this.setState({ cargando: true })
            const res = await customFetchGET(`${rutaBaseApi}variablesDisponibles`)
            if (res != null || res !== undefined) {
                this.setState({ lstVariables: res.data?.variables?.variable, cargando: false })
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
                cardTitle=" VARIABLES (Consumo del servicio /VariablesDisponibles)"
                cardBody={
                    <Container className="py-3" fluid>
                        <Row className="py-1">
                            <Col sm="12" lg="6">
                                <div className="inputGroup">
                                    <i className="fas fa-search"> </i>
                                    <input placeholder="Buscar" type="text" onChange={(text) => { this.setTxtFiltro(text.target.value) }}></input>
                                </div>
                            </Col>
                        </Row>
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
                                            Moneda
                                        </th>
                                        <th>
                                            Descripcion
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.filtro.trim() === "" ?
                                            this.state.lstVariables?.map((item, index) => {
                                                return (
                                                    <tr key={"tr-" + index} >
                                                        <th key={"tdID-" + index} >
                                                            {item.moneda}
                                                        </th>
                                                        <td key={"tdnombre-" + index} >
                                                            {item.descripcion ? item.descripcion : ""}
                                                        </td>

                                                    </tr>
                                                )
                                            })
                                            :
                                            this.state.lstVariablesFiltrada?.map((item, index) => {
                                                return (
                                                    <tr key={"tr-" + index} >
                                                        <th key={"tdID-" + index} >
                                                            {item.moneda}
                                                        </th>
                                                        <td key={"tdnombre-" + index} >
                                                            {item.descripcion ? item.descripcion : ""}
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