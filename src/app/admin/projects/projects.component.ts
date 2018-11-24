import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ListComponent} from '../super-classes/list.component';
import {Router} from '@angular/router';
import {Project} from '../../models/project.model';

const EDIT_PAGE = '/admin/projects/edit/';
const COLLECTION = 'projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent extends ListComponent<Project> {


  constructor(protected db: AngularFirestore, protected router: Router) {
    super(db, COLLECTION, router, EDIT_PAGE);
  }
}


