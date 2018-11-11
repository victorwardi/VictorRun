import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Project} from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  private fb: FirebaseService<Project>;

  constructor( private db: AngularFirestore) {
    this.fb = new FirebaseService<Project>(db, 'projects');
  }

  ngOnInit() {
  }

}
