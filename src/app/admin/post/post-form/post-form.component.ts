import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../models/post.model';
import {ActivatedRoute} from '@angular/router';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post = new Post();
  success: boolean;
  error: boolean;
  buttonLabel = 'Save';
  message = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    // uploadUrl: 'v1/images', // if needed ,
  }

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    if (this.route.snapshot.params['id']) {
      console.log(this.route.snapshot.params['id']);
      this.buttonLabel = 'Update';
      this.postService.getPost(this.route.snapshot.params['id']).subscribe(
        p => this.post = p
      );
    }
  }

  savePost() {

    try {
      if (this.post.id == null) {
        console.log('addinng....');
        this.post = this.postService.add(this.post);
        this.buttonLabel = 'Update';
        this.alertMessage('Post added!', true);
      } else {
        console.log('updating....');
        this.postService.update(this.post);
        this.alertMessage('Post updated!', true);
      }
    } catch (e) {
      console.log('error!');
      this.alertMessage('Sorry, it was not possible to insert this post!', false);
      this.post.id = null;
    }
  }

  deletePost(id: string) {
    try {
      this.postService.delete(id);
      this.alertMessage('Post has been deleted!', true);
    } catch (e) {
      this.alertMessage('Error on trying to delete this Post!', false);
    }
  }


  addNewPost() {
    this.post = new Post();
    this.buttonLabel = 'Save';
    this.clearAlertMessage();
  }

  clearAlertMessage() {
    this.success = false;
    this.error = false;
  }

  alertMessage(message: string, success: boolean) {
    this.message = message;
    this.success = success;
    this.error = !success;
  }

}
