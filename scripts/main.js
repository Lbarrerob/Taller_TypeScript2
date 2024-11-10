import { series } from './data.js';
var seriesTable = document.getElementById("series");
mostrarSeries(series);
function mostrarSeries(series) {
    var tbodySeries = document.createElement("tbody");
    var totalTemp = 0;
    var _loop_1 = function (serie) {
        var trFila = document.createElement("tr");
        trFila.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                            <td>").concat(serie.plataforma, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        trFila.addEventListener('click', function () { return mostrarSerieDetalle(serie); });
        tbodySeries.appendChild(trFila);
        totalTemp += serie.temporadas;
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    var promedioTemp = totalTemp / series.length;
    var filaPromedio = document.createElement("tr");
    filaPromedio.innerHTML = "<td>-</td>\n                            <td><b>Promedio Temporadas:</b></td>\n                            <td>".concat(promedioTemp, "</td>\n                            <td>-</td>");
    tbodySeries.appendChild(filaPromedio);
    seriesTable.appendChild(tbodySeries);
}
function mostrarSerieDetalle(serie) {
    var detalle = document.getElementById("detalleSerie");
    detalle.style.display = "block";
    document.getElementById("serie-imagen").src = serie.imagen;
    document.getElementById("serie-nombre").innerText = serie.nombre;
    document.getElementById("serie-plataforma").innerText = serie.plataforma;
    document.getElementById("serie-descripcion").innerText = serie.descripcion;
    document.getElementById("serie-enlace").href = serie.enlace;
}
