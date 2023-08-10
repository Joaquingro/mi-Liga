import { Component, EventEmitter } from '@angular/core';
import { JugadorInterface } from "../_interfaces/jugador.interface"
import JUGADORES from "./../../assets/data/jugadores.json";
import EQUIPOS from "./../../assets/data/equipos.json";
import { EquipoInterface } from '../_interfaces/equipo.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {
  
  nombre: string = "Felinos";
  estatus: boolean = false;
  
  equipos: EquipoInterface[] = [];
  jugadores: JugadorInterface[] = [];
  
  step = 0;

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
    this.equipos = EQUIPOS as any;
    console.log("Equipos:",this.equipos);
    
    
}

activarJugador(jugador: JugadorInterface){
  jugador.estado = true;
}

actualizarEstado(jugador: JugadorInterface, i: number, event: boolean){
  jugador.estado = event;
  this.step = i;
}

mostrarDatos(i: number){
  this.step= i;
}
}
