export class Serie {

    id:number;
    nombre: string; 
    plataforma: string; 
    temporadas: number;
    descripcion: string; 
    enlace: string; 
    imagen: string; 

    constructor(id: number, nombre: string, plataforma: string, temporadas: number, 
                descripcion: string, enlace: string, imagen: string) 
    {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.imagen = imagen;
    }
}