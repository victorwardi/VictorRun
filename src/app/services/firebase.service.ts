import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {take} from 'rxjs/operators';
import {ID} from '../models/id.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService<T extends ID> {

  collection: AngularFirestoreCollection<T>;
  private _db: AngularFirestore;
  private _collectionName: string;

  constructor( db: AngularFirestore, collectionName: string) {
    this._collectionName = collectionName;
    this._db = db;
    console.log('entrou no firebase service!!!');
    console.log('Collection name:' + this._collectionName);
    this.collection = db.collection(this._collectionName);
  }

  getList(): Observable<any[]> {
    return this._db.collection(this._collectionName).valueChanges().pipe(take(1));
  }

  get(id: string): any {
    return this.collection.doc<T>(id).valueChanges().pipe(take(1));
  }

  add(obj: T): T {
    try {
      obj.id = this._db.createId();
      this.collection.doc(obj.id).set(Object.assign({}, obj));
    } catch (e) {
      console.log(e);
      throw e;
    }
    return obj;
  }

  delete(id: string): void {
    this.collection.doc(id).delete();
  }

  update(obj: T) {
    try {
      this.collection.doc(obj.id).update(Object.assign({}, obj));
    } catch (e) {
      console.log(e);
    }
  }


  set db(value: AngularFirestore) {
    this._db = value;
  }

 set collectionName(value: string) {
    this._collectionName = value;
  }
}

