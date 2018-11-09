import {ActivatedRoute} from '@angular/router';
import {ID} from '../../models/id.model';
import {FirebaseService} from '../../services/firebase.service';
import {OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


export class FormComponent<T extends ID> implements OnInit {
  private fb: FirebaseService<T>;
  item: T;
  success: boolean;
  error: boolean;
  buttonLabel = 'Save';
  message = '';

  constructor( private db: AngularFirestore, private collection: string, private route: ActivatedRoute) {
    this.fb = new FirebaseService<T>(db, collection);
  }

  ngOnInit() {
    this.onEdit(this.route);
  }

  onSubmit() {

    try {
      if (this.item.id == null) {
        this.item = this.fb.add(this.item);
        this.alertMessage('Post added!', true);
        this.buttonLabel = 'Update';
      } else {
        this.fb.update(this.item);
        this.alertMessage('Post updated!', true);
      }
    } catch (e) {
      this.alertMessage('Sorry, it was not possible to insert this post!', false);
      this.item.id = null;
    }
  }

  onDelete(id: string) {
    try {
      this.fb.delete(id);
      this.alertMessage('Post has been deleted!', true);
    } catch (e) {
      this.alertMessage('Error on trying to delete this Post!', false);
    }
  }

  onEdit(route: ActivatedRoute) {
    if (route.snapshot.params['id']) {
      this.buttonLabel = 'Update';
      this.fb.get(route.snapshot.params['id']).subscribe(
        item => this.item = item
      );
    }
  }

  addNew(){
    this.item
  }

  alertMessage(message: string, success: boolean) {
    this.message = message;
    this.success = success;
    this.error = !success;
  }
}
