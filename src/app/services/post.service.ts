import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Post} from '../models/post.model';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: AngularFirestoreCollection<Post>;

  constructor(private db: AngularFirestore) {
    this.posts = db.collection('posts');
  }

  getPost(id: string) {
    return this.posts.doc<Post>(id).valueChanges().pipe(take(1));
  }

  add(post: Post): Post {
    post.id = this.db.createId();
    post.date = new Date();
    console.log(post);
    this.posts.doc(post.id).set({id: post.id, title: post.title, content: post.content, date: post.date});
    // this.posts.add({id: post.id, title: post.title, content: post.content, date: post.date});
    return post;
  }

  delete(id: string): void {

    this.posts.doc(id).delete();
  }

  update(post: Post): void {
    try {
      console.log(post);
      this.posts.doc(post.id).update({id: post.id, title: post.title, content: post.content, date: post.date, updated: new Date()});
    } catch (e) {
      console.log(e);
    }

  }
}
