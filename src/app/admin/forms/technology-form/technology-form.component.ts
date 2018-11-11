import {Component} from '@angular/core';
import {FormComponent} from '../../super-classes/form.component';
import {Technology} from '../../../models/technology.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html'
})
export class TechnologyFormComponent extends FormComponent<Technology> {

  constructor(protected firestore: AngularFirestore, protected activatedRoute: ActivatedRoute, protected router: Router) {
    super('technologies', new Technology(), firestore, activatedRoute, router);

  }
}
