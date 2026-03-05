import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']   // ✅ CORREGIDO
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  // Escucha el scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Aquí podrías añadir lógica para mostrar un menú lateral en móvil
  }
}