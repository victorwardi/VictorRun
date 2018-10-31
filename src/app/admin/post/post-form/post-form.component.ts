import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../models/post.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post = new Post();
  added: boolean;
  error: boolean;
  buttonLabel = 'Save';
  message = '';

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    if (this.route.snapshot.params['id']) {
      console.log(this.route.snapshot.params['id']);
      this.buttonLabel = 'Update'
      this.postService.getPost(this.route.snapshot.params['id']).subscribe(
        p => this.post = p
      );
    }
  }

  savePost() {
    // console.log(this.post);
    try {
      console.log(this.post);
      if (this.post.id == null) {
        this.post = this.postService.add(this.post);
        this.buttonLabel = 'Update';
        this.message = 'Post added.';
      } else {
        this.postService.update(this.post);
        this.message = 'Post updated.';
      }
      this.added = true;
      this.error = false;

    } catch (e) {
      console.log(e);
      this.error = true;
      this.added = false;
    }
  }

  deletePost(id: string) {
    console.log('deleeeeeeeeeeeete');
    try {
      this.postService.delete(id);
      this.added = true;
      this.error = false;
    } catch (e) {
      this.error = true;
      this.added = false;
    }
  }

}
