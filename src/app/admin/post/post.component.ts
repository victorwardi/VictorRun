import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Observable<any[]>;
  deleted: boolean;
  error: boolean;
  postSelected;


  constructor(private db: AngularFirestore, private postService: PostService, private router: Router) {
  }

  ngOnInit() {
   this.getPosts();
  }

  getPosts(){
    this.posts = this.db.collection('posts').valueChanges().pipe(take(1));
  }

  editPost(id: string) {
    console.log('edit');
    this.router.navigate(['admin/posts/edit', id]);
  }

  deletePost(id: string) {

    this.postSelected = id;
    try {
      this.postService.delete(id);
      this.deleted = true;
      this.error = false;
    } catch (e) {
      this.error = true;
      this.deleted = false;
      console.log(e);
    }
    // update list
    this.getPosts();
  }

}
