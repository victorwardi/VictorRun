import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../models/post.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ListComponent} from '../super-classes/list.component';

const EDIT_PAGE = '/admin/posts/edit/';
const COLLECTION = 'posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent extends ListComponent<Post> {

  constructor(protected firestore: AngularFirestore, protected router: Router) {
    super(firestore, COLLECTION, router, EDIT_PAGE);
  }


}
