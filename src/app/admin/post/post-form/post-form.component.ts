import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../models/post.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post = new Post();
  added: boolean;
  error: boolean;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  savePost() {
    // console.log(this.post);
    try {
      this.postService.add(this.post);
      this.added = true;
      this.error = false;
    } catch (e) {
      this.error = true;
      this.added = false;
    }
  }

}
