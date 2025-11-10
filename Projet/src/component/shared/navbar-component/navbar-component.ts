import { Component, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../shared/login-component/login-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    LoginComponent  // Importé ici
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {
  @ViewChild('loginComponent') loginComponent?: LoginComponent;

  isMobileOpen = signal(false);
  isLoginOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileOpen.update(v => !v);
  }

  toggleLogin() {
    this.isLoginOpen.update(v => !v);
  }

  closeLogin() {
    this.isLoginOpen.set(false);
  }
}