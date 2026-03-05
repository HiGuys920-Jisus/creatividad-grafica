import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {

  loading = false;

  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarMensaje(event: Event) {
    event.preventDefault();
    this.loading = true;

    console.log('Formulario enviado:', this.formData);

    // Simulación de envío de 1.5 segundos
    setTimeout(() => {
      alert('¡Gracias! Tu mensaje ha sido enviado correctamente.');
      this.loading = false;
      
      // Limpiar formulario
      this.formData = {
        nombre: '',
        email: '',
        mensaje: ''
      };
    }, 1500);
  }
}