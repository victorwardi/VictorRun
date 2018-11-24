import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../super-classes/form.component';
import {Project} from '../../../models/project.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import {Technology} from '../../../models/technology.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent extends FormComponent<Project> implements OnInit{

  technologies: Technology[];

  constructor(protected firestore: AngularFirestore, protected activatedRoute: ActivatedRoute, protected router: Router) {
    super('projects', new Project(), firestore, activatedRoute, router );
  }

  ngOnInit() {

    const t1 = new Technology();
    t1.name = 'Java';

    const t2 = new Technology();
    t2.name = 'Angular';

    this.technologies = [t1, t2];
  }

}
