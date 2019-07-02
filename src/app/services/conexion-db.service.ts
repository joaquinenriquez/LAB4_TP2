import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coleccion } from '../models/coleccion';

@Injectable({
  providedIn: 'root'
})
export class ConexionDBService<tipoDatos extends Coleccion> {

  private coleccionRef: AngularFirestoreCollection<tipoDatos>;
  private nombreColeccion: string;


  constructor(private afs: AngularFirestore) {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
  }

  /* #region  Métodos */

  public traerTodos(): Observable<Array<tipoDatos>> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    return this.coleccionRef.valueChanges();
  }

  public traerTodosConId(): Observable<Array<tipoDatos>> {
    return this.afs.collection(this.nombreColeccion).snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as tipoDatos;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  public crearDocumento(nuevoDocumento: tipoDatos): Promise<DocumentReference> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    if (nuevoDocumento != null && nuevoDocumento != undefined) {
      return this.coleccionRef.add(nuevoDocumento);
    }
  }

  public eliminarDocumento(idDocumento: string): Promise<void> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    if (idDocumento !== null && idDocumento.trim() !== '') {
      return this.coleccionRef.doc(idDocumento).delete();
    }
  }

  public editarDocumento(idDocumento: string, documentoEditado: tipoDatos): Promise<void> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    if (idDocumento !== null && idDocumento.trim() !== '') {
      return this.coleccionRef.doc(idDocumento).update(documentoEditado);
    }
  }

  /* #endregion */


  /* #region  Propiedades */

  get NombreColeccion(): string {
    return this.nombreColeccion;
  }

  set NombreColeccion(nombreColeccion: string) {
    this.nombreColeccion = nombreColeccion;
  }

  /* #endregion */

}
