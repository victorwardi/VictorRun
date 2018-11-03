import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

}
