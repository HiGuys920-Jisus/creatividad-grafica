import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes inicializar librerías de animación como GSAP o AOS si lo deseas
    console.log('Hero section cargada con éxito');
  }

  scrolltoProducts() {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}