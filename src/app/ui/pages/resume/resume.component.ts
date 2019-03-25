import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    scrollToElement(element): void {
        console.log(element);
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
}
