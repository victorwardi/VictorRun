import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {Repo} from "../../../models/repo.model";
import {GithubService} from "../../../services/github.service";
import {LanguageColor} from "../../../models/enuns/language-color.enum";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    user: User = null;

    repos: Repo[];
    reposOriginal: Repo[];

    languages = new Map;

    userLoaded = false;
    reposLoaded = false;

    // Doughnut
    doughnutChartLabels = new Array();
    doughnutChartData = new Array();
    doughnutChartColors = new Array();
    backgroundChartColor = new Array();
    doughnutChartType = 'doughnut';


    constructor(private githubService: GithubService) {
    }



    ngOnInit() {

        console.log('on init');
        this.githubService.getUser('victorwardi').pipe().subscribe(user => {
            this.user = user;
            this.userLoaded = true;
        });

        this.githubService.getUserRepos('victorwardi').pipe().subscribe(repos => {
            this.repos = repos;
            this.setReposColor();
            this.reposOriginal = this.repos;
            this.getUserLanguages(this.repos);
            this.reposLoaded = true;

        });
    }

    setReposColor() {

        for (const repo of this.repos) {
            repo.color = LanguageColor.getLanguageColor(repo.language);
        }

    }

    getUserLanguages(repos: Repo[]) {

        for (const repo of repos) {

            const rep = this.languages.get(repo.language);

            if (rep == null) {
                this.languages.set(repo.language, 1);
            } else {
                this.languages.set(repo.language, rep + 1);
            }
        }


        this.languages.forEach((quantity: number, language: string) => {
            this.doughnutChartLabels.push(language);
            this.doughnutChartData.push(quantity);
            this.backgroundChartColor.push(LanguageColor.getLanguageColor(language));
        });

        this.doughnutChartColors = [
            { // all colors in order
                backgroundColor: this.backgroundChartColor
            }
        ];
    }


    // events
    public chartClicked({event, active}: { event: MouseEvent, active: any[] }): void {

        if (active.length > 0) {
            const languageSelected = this.doughnutChartLabels[active[0]._index];
            console.log(languageSelected);
            this.repos = this.reposOriginal.filter(function (repo) {
                return repo.language === languageSelected;
            });
        }
    }

    public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    scrollToElement(element): void {
        console.log(element);
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

}
