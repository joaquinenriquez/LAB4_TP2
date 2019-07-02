import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataApiTurnosService } from 'src/app/services/data-api-turnos.service';
import { ITurno } from 'src/app/models/iturno';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listadoTurnos$: Observable<Array<ITurno>>;

  constructor(private dataApiTurnos: DataApiTurnosService) { }

  ngOnInit() {
    this.listadoTurnos$ = this.dataApiTurnos.traerTodosLosTurnosConId();
  }

  alta() {
    let nuevoTurno: ITurno = {
      cliente: 'cliente1',
      fecha: '20/03/2019',
      hora: '20:30'
    };

    this.dataApiTurnos.crearTurno(nuevoTurno);

  }

  baja(id: string) {
    this.dataApiTurnos.eliminarTurno(id);
  }

  modificar(id: string) {
    let nuevoTurno2: ITurno = {
      cliente: 'cliente2',
      fecha: '20/03/2019',
      hora: '20:30'
    };

    this.dataApiTurnos.
  }

}
