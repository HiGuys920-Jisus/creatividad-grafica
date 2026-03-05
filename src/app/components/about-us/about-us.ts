import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss']
})
export class AboutUsComponent {
  
  // Control de visibilidad del folleto
  mostrarFolleto: boolean = false;

  constructor(private scroller: ViewportScroller) {}

  // Función para abrir/cerrar el folleto
  toggleFolleto() {
    this.mostrarFolleto = !this.mostrarFolleto;
    
    // Opcional: Bloquear el scroll del body cuando el modal está abierto
    if (this.mostrarFolleto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  scrollToContact() {
    this.scroller.scrollToAnchor('contacto');
  }

  scrollToTop() {
    this.scroller.scrollToPosition([0, 0]);
  }
}