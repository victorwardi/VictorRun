import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(private db: AngularFirestore, private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.db.collection('posts').valueChanges().pipe(take(1));


  }

}
