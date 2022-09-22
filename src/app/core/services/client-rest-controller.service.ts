import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../models/cliente';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClientRestControllerService {

  constructor(private firestore: AngularFirestore) { 

  }

  public saveClients(client: Cliente): Promise<any>{
    return this.firestore.collection('clientes').add(client);
  }

  public getListClients(): Observable<any> {
    return this.firestore.collection('clientes').snapshotChanges();
  }
}
