import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  colorClass: string;
  icon: string;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.html',
  styleUrls: ['./product-grid.scss']
})
export class ProductGridComponent implements OnInit {
  // Lista fija de categorías de productos
  productos: Product[] = [
    { id: 1, nombre: 'Membretes', descripcion: 'Papelería corporativa de alta calidad.', colorClass: 'magenta', icon: 'assets/icons/membretes.png' },
    { id: 2, nombre: 'Tarjetas Personales', descripcion: 'Impresión premium con acabados mate o brillo.', colorClass: 'cyan', icon: 'assets/icons/tarjetas.png' },
    { id: 3, nombre: 'Facturas', descripcion: 'Documentos autorizados con numeración exacta.', colorClass: 'yellow', icon: 'assets/icons/facturas.png' },
    { id: 4, nombre: 'Boletas', descripcion: 'Comprobantes de pago para tu negocio.', colorClass: 'orange', icon: 'assets/icons/boletas.png' },
    { id: 5, nombre: 'Diplomas', descripcion: 'Certificados elegantes en papel especial.', colorClass: 'blue', icon: 'assets/icons/diplomas.png' },
    { id: 6, nombre: 'Almanaques', descripcion: 'Publicidad visible todo el año.', colorClass: 'green', icon: 'assets/icons/almanaques.png' },
    { id: 7, nombre: 'Bingos', descripcion: 'Talonarios para eventos y sorteos.', colorClass: 'purple', icon: 'assets/icons/bingos.png' },
    { id: 8, nombre: 'Etiquetas', descripcion: 'Adhesivos personalizados para productos.', colorClass: 'red', icon: 'assets/icons/etiquetas.png' }
  ];

  // Variables para la Galería de Previas (1.jpeg a 88.jpeg)
  previewImages: string[] = [];
  showModal = false;
  currentIndex = 0;

  ngOnInit() {
    this.generatePreviewList();
  }

  // Genera el listado de 88 imágenes automáticamente
  generatePreviewList() {
    for (let i = 1; i <= 88; i++) {
      this.previewImages.push(`assets/productos/${i}.jpeg`);
    }
  }

  // Lógica del Modal
  openModal() {
    this.showModal = true;
    this.currentIndex = 0;
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  }

  closeModal() {
    this.showModal = false;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.previewImages.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.previewImages.length) % this.previewImages.length;
  }
}