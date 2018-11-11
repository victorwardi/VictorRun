import {Component} from '@angular/core';
import {ListComponent} from '../super-classes/list.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Technology} from '../../models/technology.model';

const EDIT_PAGE = '/admin/technologies/edit/';
const COLLECTION = 'technologies';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html'
})
export class TechnologiesComponent extends ListComponent<Technology> {

  constructor(protected db: AngularFirestore, protected router: Router) {
    super(db, COLLECTION, router, EDIT_PAGE);
  }
}
