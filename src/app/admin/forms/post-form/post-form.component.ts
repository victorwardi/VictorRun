import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/post.model';
import {ActivatedRoute} from '@angular/router';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {AngularFirestore} from '@angular/fire/firestore';
import {FormComponent} from '../../super-classes/form.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent extends FormComponent<Post> {

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    // uploadUrl: 'v1/images', // if needed ,
  };

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {
    super(db, 'posts', route);
    this.item = new Post();


  }
}
