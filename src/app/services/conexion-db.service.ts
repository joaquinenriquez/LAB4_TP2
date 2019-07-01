import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coleccion } from '../models/coleccion';

@Injectable({
  providedIn: 'root'
})
export class ConexionDBService<tipoDatos extends Coleccion> {

  private coleccionRef: AngularFirestoreCollection<tipoDatos>;

  constructor(private afs: AngularFirestore) {
  }

  public traerTodos(coleccion: string): Observable<Array<tipoDatos>> {
    this.coleccionRef = this.afs.collection(coleccion);
    return this.coleccionRef.valueChanges();
  }

  public traerTodosConId(coleccion: string): Observable<Array<tipoDatos>> {
    return this.afs.collection(coleccion).snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as tipoDatos;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }




}
