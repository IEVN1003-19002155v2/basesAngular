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
      nombreComprador: ['', [Validators.required, Validators.minLength(3)]],
      cantidadCompradores: [1, [Validators.required, Validators.min(1)]],
      usaTarjetaCineco: [false],
      cantidadBoletos: [1, [Validators.required, Validators.min(1), Validators.max(1)]]
    });
  }

  // Escucha los cambios en cantidad de compradores para ajustar la validación de cantidad de boletos
  ngOnInit() {
    this.form.get('cantidadCompradores')?.valueChanges.subscribe(cantidadCompradores => {
      const maxBoletos = cantidadCompradores * 7; // 7 boletos por comprador
      this.form.get('cantidadBoletos')?.setValidators([Validators.required, Validators.min(1), Validators.max(maxBoletos)]);
      this.form.get('cantidadBoletos')?.updateValueAndValidity();  // Refresca las validaciones
    });
  }

  calcularTotalBoletos() {
    if (this.form.valid) {
      const nombre = this.form.get('nombreComprador')?.value;
      const cantidadCompradores = this.form.get('cantidadCompradores')?.value;
      const usaTarjetaCineco = this.form.get('usaTarjetaCineco')?.value;
      const cantidadBoletos = this.form.get('cantidadBoletos')?.value;
      
      // El precio base de los boletos
      const precioBoleto = 12;
      let total = cantidadBoletos * precioBoleto;

      // Aplicar descuentos por cantidad de boletos
      if (cantidadBoletos > 5) {
        total *= 0.85; // 15% de descuento
      } else if (cantidadBoletos >= 3 && cantidadBoletos <= 5) {
        total *= 0.90; // 10% de descuento
      }

      // Aplicar descuento por uso de tarjeta Cineco
      if (usaTarjetaCineco) {
        total *= 0.90; // 10% de descuento adicional
      }

      this.totalPagar = total;
    }
  }
}
