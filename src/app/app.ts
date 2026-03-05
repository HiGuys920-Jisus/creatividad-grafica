import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProductGridComponent } from './components/product-grid/product-grid';
import { AboutUsComponent } from './components/about-us/about-us';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [
  CommonModule,
  RouterOutlet,
  NavbarComponent,
  HeroComponent,
  ProductGridComponent,
  AboutUsComponent,
  FooterComponent
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']   // ✅ CORREGIDO
})
export class AppComponent {
  title = 'creatividad-grafica';
}