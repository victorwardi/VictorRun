import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../auth/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.router.navigate(['/admin']);
  }

}
