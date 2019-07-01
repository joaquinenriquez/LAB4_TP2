import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataApiTurnosService } from 'src/app/services/data-api-turnos.service';
import { ITurno } from 'src/app/models/iturno';

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

}
