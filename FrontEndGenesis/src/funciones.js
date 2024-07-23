
var getFechaActual = function () {
    var date = new Date();
    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return day + "/" + month + "/" + year
}

const generateID = function(){
    //ID = ani + mes + dia
    var timestamp = new Date().valueOf();
    return timestamp;
}

const getFechaLarga = function(){
    const NombresMeses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    var date = new Date();
    var year = date.getFullYear();

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    var month = date.getMonth()

    var FechaLarga = "Guatemala, " + day +" de " + NombresMeses[month] + " del " +year;

    return FechaLarga;
}


const getMesCorto = function(){
    const NombresMeses= ["Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul","Ago","Sep","Oct","Nov","Dic"]
    var date = new Date();
    var month = date.getMonth()
    return NombresMeses[month];
}
const getMesLargo = function(){
    const NombresMeses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    var date = new Date();
    var month = date.getMonth()
    return NombresMeses[month];
}

const getNombreMeses= function(){
    const NombresMeses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    return NombresMeses;
}

const getAnio = function(){
    var date = new Date();
    var year = date.getFullYear();
    return year;
}

const getNumMes = function(){
    var date = new Date();
    var month = date.getMonth()
    return month;
}



const getMesCortoXfecha =function(fecha){
    const NombresMeses= ["Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    var fechaSplit = fecha.split("/");
    var Mes = (fechaSplit[1])-1;
    return NombresMeses[Mes];
}

const getAnioXfecha =function(fecha){
    var date = new Date(fecha);
    var year = date.getFullYear();
    return year;
}

const customFetchAll = (ruta, method, data) => {
    return new Promise(async function (resolve, reject) {
        var Config = {
            method: method,
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };
        await fetch(ruta, Config)
            .then((respuesta) => respuesta.json())
            .then((respuestaJson) => resolve(respuestaJson))
            .catch((error) => reject(error));
    });
};

const customFetchGET=(ruta) =>{
    return new Promise(async function (resolve, reject) {
        var Config = {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }
        await fetch(ruta, Config)
            .then((respuesta) => respuesta.json())
            .then((respuestaJson) => resolve(respuestaJson))
            .catch((error) => reject(error))

    })


}

const formatearFecha =function(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
    const anio = fecha.getFullYear();

    return `${dia}-${mes}-${anio}`;
}

const formatearFecha2 =function(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
    const anio = fecha.getFullYear();

    return `${anio}-${mes}-${dia}`;
}
const obtenerHoraActual=function () {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    return `${horas}:${minutos}:${segundos}`;
}
export {obtenerHoraActual, formatearFecha,formatearFecha2,generateID, getFechaActual,getFechaLarga,getMesCorto,getAnio,getMesLargo, getNombreMeses, getNumMes,getMesCortoXfecha,getAnioXfecha,customFetchAll,customFetchGET}
