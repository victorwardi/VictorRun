import {Component} from '@angular/core';
import {FormComponent} from '../../super-classes/form.component';
import {Project} from '../../../models/project.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent extends FormComponent<Project> {

  constructor(protected firestore: AngularFirestore, protected activatedRoute: ActivatedRoute, protected router: Router) {
    super('projects', new Project(), firestore, activatedRoute, router );
  }
}
