import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  form: FormGroup;
  totalPagar: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cantidadBoletos: [0, [Validators.required, Validators.min(1), Validators.max(7)]],
      usaTarjetaCineco: [false],
    });
  }

  calcularTotalBoletos(): void {
    if (this.form.valid) {
      const { cantidadBoletos, usaTarjetaCineco } = this.form.value;
      const precioBoleto = 12;
      let total = precioBoleto * cantidadBoletos;
      let descuento = 0;

      // Aplicar descuentos según cantidad de boletos
      if (cantidadBoletos > 5) {
        descuento = 0.15;  // 15% de descuento
      } else if (cantidadBoletos >= 3) {
        descuento = 0.10;  // 10% de descuento
      }

      total -= total * descuento;

      // Descuento adicional por usar tarjeta CINECO
      if (usaTarjetaCineco) {
        total -= total * 0.10;  // 10% adicional
      }

      this.totalPagar = total;
    }
  }
}

