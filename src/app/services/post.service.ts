import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: AngularFirestoreCollection<Post>;

  constructor(private db: AngularFirestore) {
    this.posts = db.collection('posts');

  }

  add(post: Post): void {
    post.id = this.db.createId();
    console.log(post);
    this.posts.add({id: post.id, title: post.title, content: post.content, date: new Date()});
  }

  delete(post: Post): void {
    this.db.doc<Post>(post.id).delete();
  }

  update(post: Post): void {
    this.db.doc<Post>(post.id).update(post);
  }
}
