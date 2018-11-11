import {ActivatedRoute, Router} from '@angular/router';
import {ID} from '../../models/id.model';
import {FirebaseService} from '../../services/firebase.service';
import {Inject, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


export class FormComponent<T extends ID> implements OnInit {
  private fb: FirebaseService<T>;
  success: boolean;
  error: boolean;
  buttonLabel = 'Save';
  message = '';

  constructor(protected collection: string, protected item: T, protected firestore: AngularFirestore,
              protected activatedRoute: ActivatedRoute,
              protected  router: Router) {
    this.fb = new FirebaseService<T>(firestore, collection);
  }

  ngOnInit() {
    this.onEdit(this.activatedRoute);
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

  onCopy() {
    try {
        this.item.id = null;
        this.item = this.fb.add(this.item);
        this.alertMessage('Post copied!', true);
        this.buttonLabel = 'Update';
    } catch (e) {
      this.alertMessage('Sorry, it was not possible to copy this post!', false);
      this.item.id = null;
    }
  }

  onDelete() {
    try {
      this.fb.delete(this.item.id);
      this.alertMessage('Post has been deleted!', true);
      this.router.navigate(['/admin/' + this.collection]);
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
  
  alertMessage(message: string, success: boolean) {
    this.message = message;
    this.success = success;
    this.error = !success;
  }
}
