import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {User} from '../../models/user.model';
import {Repo} from '../../models/repo.model';
import {LanguageColor} from '../../models/enuns/language-color.enum';
import {animate, query, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    animations: [
        trigger('myAnimation', [
            transition('* => *', [
                query(
                    ':enter',
                    [style({opacity: 0})],
                    {optional: true}
                ),
                query(
                    ':leave',
                    [style({opacity: 1}), animate('0.3s', style({opacity: 0}))],
                    {optional: true}
                ),
                query(
                    ':enter',
                    [style({opacity: 0}), animate('0.3s', style({opacity: 1}))],
                    {optional: true}
                )
            ])
        ])
    ]
})
export class MainComponent {


}
