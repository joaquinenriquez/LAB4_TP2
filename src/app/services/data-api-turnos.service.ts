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
    conexiondb.NombreColeccion = 'turnos';
  }

  public guardarNuevoTurno(nuevoTurno: ITurno) {

  }

  public traerTodosLosTurnos(): Observable<Array<ITurno>> {
    return this.listaTurnos$ = this.conexiondb.traerTodos();
  }

  public traerTodosLosTurnosConId(): Observable<Array<ITurno>> {
    return this.listaTurnos$ = this.conexiondb.traerTodosConId();
  }

  public crearTurno(nuevoTurno: ITurno) {
    return this.conexiondb.crearDocumento(nuevoTurno);
  }

  public eliminarTurno(idTurno: string) {
    return this.conexiondb.eliminarDocumento(idTurno);
  }

  public Modificar(idTurno: string, turnoModificado: ITurno) {
    return this.conexiondb.editarDocumento(idTurno, turnoModificado);
  }

}
