package com.genesis.cliente;

import com.genesis.wsdl.TipoCambioFechaInicial;
import com.genesis.wsdl.TipoCambioFechaInicialResponse;
import com.genesis.wsdl.TipoCambioRango;
import com.genesis.wsdl.TipoCambioRangoResponse;
import com.genesis.wsdl.VariablesDisponibles;
import com.genesis.wsdl.VariablesDisponiblesResponse;
import java.util.Map;
import org.springframework.ws.client.core.support.WebServiceGatewaySupport;
import org.springframework.ws.soap.client.core.SoapActionCallback;

/**
 *
 * @author Denis Morales <alfonso200925014@gmail.com>
 */
public class SoapCliente extends WebServiceGatewaySupport {

    private final String rutaGeneral = "https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx";
    private final String rutaBaseServicios = "http://www.banguat.gob.gt/variables/ws/";

    public VariablesDisponiblesResponse VariablesDisponiblesResponse() {
        VariablesDisponibles peticionVariablesDisponibles = new VariablesDisponibles();
        SoapActionCallback soapActionCallback = new SoapActionCallback(rutaBaseServicios.concat("VariablesDisponibles"));
        VariablesDisponiblesResponse respuesta = (VariablesDisponiblesResponse) getWebServiceTemplate().marshalSendAndReceive(rutaGeneral, peticionVariablesDisponibles, soapActionCallback);
        String A = "";
        return respuesta;
    }

    public TipoCambioRangoResponse TipoCambioRango(Map parametrosEntrada) {
        String fechainit = "" + parametrosEntrada.get("fechainit");
        String fechafin = "" + parametrosEntrada.get("fechafin");
        TipoCambioRango peticionTipoCambioRango = new TipoCambioRango();
        peticionTipoCambioRango.setFechainit(fechainit);
        peticionTipoCambioRango.setFechafin(fechafin);
        SoapActionCallback soapActionCallback = new SoapActionCallback(rutaBaseServicios.concat("TipoCambioRango"));
        TipoCambioRangoResponse respuesta = (TipoCambioRangoResponse) getWebServiceTemplate().marshalSendAndReceive(rutaGeneral, peticionTipoCambioRango, soapActionCallback);
        String A = "";
        return respuesta;
    }

    public  TipoCambioFechaInicialResponse TipoCambioFechaInicial(Map parametrosEntrada) {
        String fechainit = "" + parametrosEntrada.get("fechainit");
        TipoCambioFechaInicial peticionTipoCambioFechaInicial = new TipoCambioFechaInicial();
        peticionTipoCambioFechaInicial.setFechainit(fechainit);
        
        SoapActionCallback soapActionCallback = new SoapActionCallback(rutaBaseServicios.concat("TipoCambioFechaInicial"));
        TipoCambioFechaInicialResponse respuesta = (TipoCambioFechaInicialResponse) getWebServiceTemplate().marshalSendAndReceive(rutaGeneral, peticionTipoCambioFechaInicial, soapActionCallback);
        String A = "";
        return respuesta;
    }
}
