import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JugadorInterface } from "../_interfaces/jugador.interface"
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})

export class JugadorComponent {
  @Input() jugador: JugadorInterface | undefined;

  @Input('equipo')
  nombre: string = "Tigres";

  @Output('onActivate')
  estatus: EventEmitter<boolean> = new EventEmitter<boolean>;

  desactivar() {
    this.estatus.emit(false);
  }
}
