package com.genesis.services;

import com.genesis.cliente.SoapCliente;
import com.genesis.entities.Tasa;
import com.genesis.repositories.tasaCambioRepository;
import com.genesis.wsdl.TipoCambioFechaInicialResponse;
import com.genesis.wsdl.TipoCambioRangoResponse;
import com.genesis.wsdl.VariablesDisponiblesResponse;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Denis Morales <alfonso200925014@gmail.com>
 */
@Service
public class genesisService {

    @Autowired
    private SoapCliente soapCliente;

    @Autowired
    private tasaCambioRepository tasaCambioRepository;


    /*SOAP*/
    public VariablesDisponiblesResponse variablesDisponibles() {
        try {
            VariablesDisponiblesResponse VariablesDisponiblesResponse = soapCliente.VariablesDisponiblesResponse();
            return VariablesDisponiblesResponse;
        } catch (Exception e) {
            return null;
        }
    }

    public TipoCambioRangoResponse TipoCambioRango(Map parametrosEntrada) {
        try {
            TipoCambioRangoResponse TipoCambioRangoResponse = soapCliente.TipoCambioRango(parametrosEntrada);
            return TipoCambioRangoResponse;
        } catch (Exception e) {
            return null;
        }
    }

    public TipoCambioFechaInicialResponse TipoCambioFechaInicial(Map parametrosEntrada) {
        try {
            TipoCambioFechaInicialResponse TipoCambioFechaInicial = soapCliente.TipoCambioFechaInicial(parametrosEntrada);
            return TipoCambioFechaInicial;
        } catch (Exception e) {
            return null;
        }
    }

    /*JAP MySql*/
        public boolean agregarTasaPromedio(Tasa _Tasa) {
        try {
            tasaCambioRepository.save(_Tasa);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public List<Tasa> obtenerTasaPromedio() {
        try {
            List<Tasa> lstTasas = tasaCambioRepository.findAll();
            return lstTasas;
        } catch (Exception e) {
            return null;
        }
    }

    
}
