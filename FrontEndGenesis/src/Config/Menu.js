/*Pantallas*/
import Variables from "../partials/Variables";
import TCambio from "../partials/TCambio";
import TasaCambioPromedio from "../partials/TasaCambioPromedio";
import TCFechaInicial from "../partials/TCFechaInicial";

const EstructuraMenu = [
    {
        id: 1,
        titulo: " VARIABLES D.",
        iconoFas5: "fas fa-cog",
        ruta: "/variablesDisponibles",
        exact: true,
        componente: Variables

    },    
    {
        id: 2,
        titulo: " TIPO CAMBIO",
        iconoFas5: "fas fa-money-bill-wave",
        ruta: "/tipoCambio",
        exact: true,
        componente: TCambio

       
    },
    {
        id: 3,
        titulo: " PETICIONES",
        iconoFas5: "fas fa-greater-than-equal",
        ruta: "/peticiones",
        exact: true,
        componente: TasaCambioPromedio  
    },
    {
        id: 4,
        titulo: " EXTRA",
        iconoFas5: "fas fa-plus-circle",
        ruta: "/extra",
        exact: true,
        componente: TCFechaInicial

       
    }

    
]


export default EstructuraMenu;