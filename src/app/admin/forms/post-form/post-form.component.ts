import {Component} from '@angular/core';
import {Post} from '../../../models/post.model';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormComponent} from '../../super-classes/form.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(protected firestore: AngularFirestore, protected activatedRoute: ActivatedRoute, protected router: Router) {
    super('posts', new Post(), firestore, activatedRoute, router);
  }
}
