import {Component} from '@angular/core';
import {FormComponent} from '../../super-classes/form.component';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent extends FormComponent<Project> {

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {
    super(db, 'projects', new Project(), route);
  }
}
