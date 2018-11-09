import {Component} from '@angular/core';
import {FormComponent} from '../../super-classes/form.component';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Technology} from '../../../models/technology.model';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html'
})
export class TechnologyFormComponent extends FormComponent<Technology> {

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {
    super(db, 'technologies', route);
    this.item = new Technology();

  }
}
