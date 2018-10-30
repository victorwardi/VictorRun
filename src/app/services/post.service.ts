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

  getPost(id: string): Post {

    console.log(id);
    const post: Post = new Post();
  //   console.log(this.db.doc<Post>(id).collection());

    return post;
  }

  add(post: Post): Post {
    post.id = this.db.createId();
    post.date = new Date();
    console.log(post);
    this.posts.add({id: post.id, title: post.title, content: post.content, date: post.date});
    return post;
  }

  delete(id: string): void {
    this.db.doc<Post>(id).delete();
  }

  update(post: Post): void {
    this.db.doc<Post>(post.id).update(post);
  }
}
