import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('collapse', [
            state('open', style({
                opacity: '1',
                display: 'block',
                height: '100%',
                //transform: 'translate3d(0, 0, 0)'
            })),
            state('closed',   style({
                opacity: '0',
                display: 'none',
                height: '0%',
              //  transform: 'translate3d(0, -100%, 0)'
            })),
            transition('closed => open', animate('500ms ease-in')),
            transition('open => closed', animate('100ms ease-out'))
        ])
    ]
})
export class HeaderComponent implements OnInit {

    collapse:string = "closed";

    constructor() {
    }

    ngOnInit() {
    }

    toogleCollapse() {
       this.collapse = this.collapse == 'open' ? 'closed' : 'open';
    }

}
