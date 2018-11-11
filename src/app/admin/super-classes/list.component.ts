import {FirebaseService} from '../../services/firebase.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ID} from '../../models/id.model';

export class ListComponent<T extends ID> implements OnInit {

  protected fb: FirebaseService<T>;
  items: Observable<any[]>;
  deleted: boolean;
  error: boolean;
  itemSelected;

  constructor(protected firestore: AngularFirestore,
              protected collection: string,
              protected r: Router,
              protected editPage: string) {
    this.fb = new FirebaseService<T>(firestore, collection);
  }

  ngOnInit() {
    this.getList();
  }




  onEdit(itemSelected: string) {
    this.r.navigate([this.editPage, itemSelected]);
  }

  onDelete(id: string) {

    this.itemSelected = id;
    try {
      this.fb.delete(id);
      this.deleted = true;
      this.error = false;
    } catch (e) {
      this.error = true;
      this.deleted = false;
      console.log(e);
    }
    // update list
    this.getList();

  }

  getList() {
    this.items = this.fb.getList();
  }
}
