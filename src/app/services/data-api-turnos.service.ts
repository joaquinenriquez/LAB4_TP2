import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { ITurno } from '../models/iturno';
import { Observable } from 'rxjs';
import { ConexionDBService } from './conexion-db.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DataApiTurnosService {

  private listaTurnos$: Observable<Array<ITurno>>;

  constructor(private conexiondb: ConexionDBService<ITurno>) {

  }

  public guardarNuevoTurno(nuevoTurno: ITurno) {

  }

  public traerTodosLosTurnos(): Observable<Array<ITurno>> {
    return this.listaTurnos$ = this.conexiondb.traerTodos('turnos');
  }

  public traerTodosLosTurnosConId(): Observable<Array<ITurno>> {
    return this.listaTurnos$ = this.conexiondb.traerTodosConId('turnos');
  }


}
