/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.genesis.entities;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

/**
 *
 * @author Denis Morales <alfonso200925014@gmail.com>
 */
@Entity
@Table(name = "tasa_cambio")
public class Tasa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_peticion")
    private Long id_peticion;

    @Column(name = "fecha", nullable = false)
    private LocalDate fecha;

    @Column(name = "hora", nullable = false)
    private LocalTime hora;

    @Column(name = "tasa_venta", nullable = false, precision = 10, scale = 5)
    private BigDecimal tasa_venta;

    @Column(name = "tasa_compra", nullable = false, precision = 10, scale = 5)
    private BigDecimal tasa_compra;

    public Tasa() {
    }

    public Tasa(Long id_peticion, LocalDate fecha, LocalTime hora, BigDecimal tasa_venta, BigDecimal tasa_compra) {
        this.id_peticion = id_peticion;
        this.fecha = fecha;
        this.hora = hora;
        this.tasa_venta = tasa_venta;
        this.tasa_compra = tasa_compra;
    }

    public Long getId_peticion() {
        return id_peticion;
    }

    public void setId_peticion(Long id_peticion) {
        this.id_peticion = id_peticion;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public BigDecimal getTasa_venta() {
        return tasa_venta;
    }

    public void setTasa_venta(BigDecimal tasa_venta) {
        this.tasa_venta = tasa_venta;
    }

    public BigDecimal getTasa_compra() {
        return tasa_compra;
    }

    public void setTasa_compra(BigDecimal tasa_compra) {
        this.tasa_compra = tasa_compra;
    }
    
     
}
