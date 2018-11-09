import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Post} from '../../models/post.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Projects} from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  private fb: FirebaseService<Projects>;

  constructor( private db: AngularFirestore, private router: Router) {
    this.fb = new FirebaseService<Post>(db, 'projects');
  }

  ngOnInit() {
  }

}
