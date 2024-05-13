import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { CommonModule } from '@angular/common';

import { HeaderItems } from './header-items';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


  public navbarCollapsed = true;
  headerItems: HeaderItems[] | undefined;
  unAuthItems: HeaderItems[] | undefined;
  authItems: HeaderItems[] | undefined;

  // get isLoggedIn() {
  //   return this.authService.isLoggedIn;
  // }
  // get notEmpty() {
  //   return this.authService.notEmpty;
  // }

  constructor() { }

  ngOnInit(): void {

    this.headerItems = [
      { caption: 'Home', path: 'home', link: [''] },
      { caption: 'Users', path: 'users', link: ['/users'] },
      { caption: 'Contact', path: 'contact', link: ['/contact'] },
    ];

    this.unAuthItems = [
      { caption: 'Login', path: 'login', link: ['/auth/login'] },
      { caption: 'Register', path: 'register', link: ['/auth/register'] },
    ];

    this.authItems = [
      { caption: 'Profile', path: 'profile', link: ['/auth/profile'] },
      { caption: 'Logout', path: 'logout', link: ['/auth/logout'] },
    ];
  }

  $clock = interval(1000).pipe(
    map(() => new Date())
  );

}
