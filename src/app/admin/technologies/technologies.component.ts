import { Component, OnInit } from '@angular/core';
import {ListComponent} from '../super-classes/list.component';
import {Post} from '../../models/post.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

const EDIT_PAGE = '/admin/techs/edit/';
const COLLECTION = 'technologies';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html'
})
export class TechnologiesComponent extends ListComponent<Post> {

  constructor(private db: AngularFirestore, private router: Router) {
    super(db, COLLECTION, router, EDIT_PAGE);
  }
}
