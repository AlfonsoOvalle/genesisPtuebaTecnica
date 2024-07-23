package com.genesis.controller;

import com.genesis.entities.Tasa;
import com.genesis.services.genesisService;
import com.genesis.wsdl.TipoCambioFechaInicial;
import com.genesis.wsdl.TipoCambioFechaInicialResponse;
import com.genesis.wsdl.TipoCambioRangoResponse;
import com.genesis.wsdl.VariablesDisponiblesResponse;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Denis Morales <alfonso200925014@gmail.com>
 */
@RestController
@CrossOrigin(origins = "*")
public class genesisController {

    @Autowired
    private genesisService genesisService;

    /*SOAP*/
    @GetMapping(value = "/variablesDisponibles", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map variablesDisponibles() throws ParseException {
        Map mapRespuesta = new HashMap();
        try {
            VariablesDisponiblesResponse variablesDisponibles = genesisService.variablesDisponibles();
            if (variablesDisponibles != null) {
                mapRespuesta.put("estado", "exito");
                mapRespuesta.put("mensaje", "Variables obtenidas exitosamente");
                mapRespuesta.put("data", variablesDisponibles.getVariablesDisponiblesResult());
            } else {
                mapRespuesta.put("estado", "error");
                mapRespuesta.put("mensaje", "Error al obtener las variables");
                mapRespuesta.put("data", null);
            }
            return mapRespuesta;
        } catch (Exception e) {
            mapRespuesta.put("estado", "error");
            mapRespuesta.put("mensaje", "Error: " + e);
            mapRespuesta.put("data", null);
            return mapRespuesta;
        }
    }

    @PostMapping(value = "/TipoCambioRango", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map TipoCambioRango(@RequestBody Map parametrosEntrada) throws ParseException {
        Map mapRespuesta = new HashMap();
        try {
            TipoCambioRangoResponse TipoCambioRango = genesisService.TipoCambioRango(parametrosEntrada);
            if (TipoCambioRango != null) {
                mapRespuesta.put("estado", "exito");
                mapRespuesta.put("mensaje", "Variables obtenidas exitosamente");
                mapRespuesta.put("data", TipoCambioRango.getTipoCambioRangoResult());
            } else {
                mapRespuesta.put("estado", "error");
                mapRespuesta.put("mensaje", "Error al obtener las variables");
            }
            return mapRespuesta;
        } catch (Exception e) {
            mapRespuesta.put("estado", "error");
            mapRespuesta.put("mensaje", "Error: " + e);
            return mapRespuesta;
        }
    }

    @PostMapping(value = "/TipoCambioFechaInicial", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map TipoCambioFechaInicial(@RequestBody Map parametrosEntrada) throws ParseException {
        Map mapRespuesta = new HashMap();
        try {
            TipoCambioFechaInicialResponse TipoCambioFechaInicial = genesisService.TipoCambioFechaInicial(parametrosEntrada);
            if (TipoCambioFechaInicial != null) {
                mapRespuesta.put("estado", "exito");
                mapRespuesta.put("mensaje", "Variables obtenidas exitosamente");
                mapRespuesta.put("data", TipoCambioFechaInicial.getTipoCambioFechaInicialResult());
            } else {
                mapRespuesta.put("estado", "error");
                mapRespuesta.put("mensaje", "Error al obtener las variables");
            }
            return mapRespuesta;
        } catch (Exception e) {
            mapRespuesta.put("estado", "error");
            mapRespuesta.put("mensaje", "Error: " + e);
            return mapRespuesta;
        }
    }

    /*JPA MySQL*/
    @PostMapping(value = "/agregarTasaPromedio", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map agregarTasaPromedio(@RequestBody Tasa _Tasa) throws ParseException {
        Map mapRespuesta = new HashMap();
        try {
            boolean agregarTasaPromedio = genesisService.agregarTasaPromedio(_Tasa);
            if (agregarTasaPromedio) {
                mapRespuesta.put("estado", "exito");
                mapRespuesta.put("mensaje", "Tasa promedio agregada exitosamente");
            } else {
                mapRespuesta.put("estado", "error");
                mapRespuesta.put("mensaje", "Error al agregar la tasa promedio");
            }
            return mapRespuesta;
        } catch (Exception e) {
            mapRespuesta.put("estado", "error");
            mapRespuesta.put("mensaje", "Error: " + e);

            return mapRespuesta;
        }
    }

    @GetMapping(value = "/obtenerTasaPromedio", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map obtenerTasaPromedio() throws ParseException {
        Map mapRespuesta = new HashMap();
        try {
            List<Tasa> listaTasasPromedio = genesisService.obtenerTasaPromedio();
            if (listaTasasPromedio != null) {
                mapRespuesta.put("estado", "exito");
                mapRespuesta.put("mensaje", "Tasas promedio obtenidas correctamente.");
                mapRespuesta.put("data", listaTasasPromedio);
            } else {
                mapRespuesta.put("estado", "error");
                mapRespuesta.put("mensaje", "Error al obtener las tasas");
                mapRespuesta.put("data", null);
            }
            return mapRespuesta;
        } catch (Exception e) {
            mapRespuesta.put("estado", "error");
            mapRespuesta.put("mensaje", "Error: " + e);
            mapRespuesta.put("data", null);
            return mapRespuesta;
        }
    }
}
