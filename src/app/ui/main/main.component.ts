import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {fadeAnimation} from "../utils/animations";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    animations: [fadeAnimation],
})
export class MainComponent {

    getRouterOutletState(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }


}
