import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title = "Recipe";
  navbarOpen = false;
  constructor(public authService: AuthService) {

  }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onLogout() {
    this.authService.logout();
  }

}
