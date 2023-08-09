import { Component, EventEmitter } from '@angular/core';
import { JugadorInterface } from "../_interfaces/jugador.interface"
import JUGADORES from "./../../assets/data/jugadores.json";


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {
  
  nombre: string = "Felinos";
  estatus: boolean = false;
  
  jugadores: JugadorInterface[] = [];
  
  jugadorDetalle: JugadorInterface = {
    nombre: "Sergio",
    edad: 35,
    apodo: "Felino",
    foto: "image.jpg",
    posicion: "Delantero",
    estado: false
  }
  
  ngOnInit(){
    this.jugadores = JUGADORES as any;
    console.log(this.jugadores);
    for (let j of this.jugadores) {
      console.log(j);
    } 
}



actualizarEstado(event: boolean){
  this.jugadorDetalle.estado = event;
}

}
