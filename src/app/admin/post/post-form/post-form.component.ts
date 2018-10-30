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

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    if (this.route.snapshot.params['id'] !== '') {
      this.post = this.postService.getPost(this.route.snapshot.params['id']);
    }
  }

  savePost() {
    // console.log(this.post);
    try {
      this.post = this.postService.add(this.post);
      this.added = true;
      this.error = false;
    } catch (e) {
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
