import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    encapsulation: ViewEncapsulation.None,

})
export class SkillsComponent implements OnInit {


    skills = new Map<string, number>();
    maxYearsExperience = Array.from(Array(10).keys());
    constructor() {}

    ngOnInit() {
        this.getSkills();
    }

    private getSkills() {

        this.skills.set('HTML', 5);
        this.skills.set('Java', 10);
        this.skills.set('CSS', 10);
        this.skills.set('HTML', 10);
        this.skills.set('Angular', 1);
        this.skills.set('Javascript', 10);
        this.skills.set('Android', 3);
        this.skills.set('Flutter', 1);
        this.skills.set('Coldfusion', 8);
        this.skills.set('PHP', 5);

    }




}
