import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-not-allowed',
  templateUrl: './not-allowed.component.html',
  styleUrls: ['./not-allowed.component.css']
})
export class NotAllowedComponent implements OnInit {

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
  }
}
