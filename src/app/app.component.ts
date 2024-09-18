import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  pelicula={
    nombre: 'Super Man', // texto unico que aparece en el navegador
    fechaLanzamiento: new Date(), // Para dar la fecha
    precio: 123.65
  }

  duplicarNumero(valor:number):number{
    return valor*2;
  }
}
