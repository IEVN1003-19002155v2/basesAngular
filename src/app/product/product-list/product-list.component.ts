import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Salida de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2022",
      "Precio": 20000,
      "Marca":"NISSAN",
      "Color":"Naranja",
      "imagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/cc12bb6c50b6ff98695d616be92cb3183849636e/preview-928x522.jpg"
  },
  {
    "productoId":2,
    "Modelo":'A4',
    "Descripcion":"2 puertas",
    "year":"Marzo 3 2022",
    "Precio": 60000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"https://upload.wikimedia.org/wikipedia/commons/1/1d/Audi_A3_8Y_Sedan_IMG_5936.jpg"
  },
  {
    "productoId":3,
    "Modelo":'Rio',
    "Descripcion":"4 puertas familiar",
    "year":"Agosto 3 2022",
    "Precio": 30000,
    "Marca":"KIA",
    "Color":"Gris",
    "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnr9J4TuDO1hmdqxbAERazxI907k4xlFlj-w&s"
  } 
]
}
