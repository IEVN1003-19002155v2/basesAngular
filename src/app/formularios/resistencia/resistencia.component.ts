import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  colorCodes: { [key: string]: string } = {
    'Negro': 'black',
    'Café': '#8B4513',
    'Rojo': 'red',
    'Naranja': 'orange',
    'Amarillo': 'yellow',
    'Verde': 'green',
    'Azul': 'blue',
    'Violeta': 'violet',
    'Gris': 'gray',
    'Blanco': 'white'
  };
// FormGroup llamdo
  resistenciaForm: FormGroup;
  valor: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;
  resultado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.resistenciaForm = this.fb.group({
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerancia: ['', Validators.required]
    });
  }

  calcular() {
    const color1 = this.resistenciaForm.value.color1;
    const color2 = this.resistenciaForm.value.color2;
    const color3 = this.resistenciaForm.value.color3;
    const tolerancia = this.resistenciaForm.value.tolerancia;

    const valorColor1 = this.colors.indexOf(color1);
    const valorColor2 = this.colors.indexOf(color2);
    const multiplicador = Math.pow(10, this.colors.indexOf(color3));

    this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
    const toleranceFactor = tolerancia === 'oro' ? 0.05 : 0.10;
    this.valorMax = this.valor * (1 + toleranceFactor);
    this.valorMin = this.valor * (1 - toleranceFactor);
    this.resultado = true;
  }

  // Devuelve el código de color basado en el nombre del color seleccionado
  getColorCode(color: string): string {
    return this.colorCodes[color] || 'transparent';
  }

  // Devuelve el color de fondo para la tolerancia
  getToleranceColor(): string {
    const tolerancia = this.resistenciaForm.value.tolerancia;
    if (tolerancia === 'oro') {
      return 'gold';
    } else if (tolerancia === 'plata') {
      return 'silver';
    }
    return 'transparent';
  }
}
