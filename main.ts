import { Serie } from "./serie.js";
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
mostrarSeries(series);

function mostrarSeries(series : Serie[]): void {
    let tbodySeries = document.createElement("tbody");
    let totalTemp = 0;

    for (let serie of series){
        let trFila: HTMLElement = document.createElement("tr");

        trFila.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.nombre}</td>
                            <td>${serie.plataforma}</td>
                            <td>${serie.temporadas}</td>`;
                trFila.addEventListener('click', () => mostrarSerieDetalle(serie));
                tbodySeries.appendChild(trFila);
        
        totalTemp += serie.temporadas;
    }

    let promedioTemp = totalTemp/series.length;
    let filaPromedio : HTMLElement = document.createElement("tr");
    filaPromedio.innerHTML = `<td>-</td>
                            <td><b>Promedio Temporadas:</b></td>
                            <td>${promedioTemp}</td>
                            <td>-</td>`;
    
    tbodySeries.appendChild(filaPromedio);
    seriesTable.appendChild(tbodySeries);
}

function mostrarSerieDetalle(serie: Serie): void {
    const detalle = document.getElementById("detalleSerie")!;

    detalle.style.display = "block";
    (document.getElementById("serie-imagen") as HTMLImageElement).src = serie.imagen;
    (document.getElementById("serie-nombre") as HTMLElement).innerText = serie.nombre;
    (document.getElementById("serie-plataforma") as HTMLElement).innerText = serie.plataforma;
    (document.getElementById("serie-descripcion") as HTMLElement).innerText = serie.descripcion;
    (document.getElementById("serie-enlace") as HTMLAnchorElement).href = serie.enlace; 

}