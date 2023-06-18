import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component( {
  //El Selector es la etiqueta de nuestro header.component.html con este luego podremos
  //crear un tag en nuestro app.component para llamar nuestro header completo
  selector : 'app-header',
  templateUrl : `./header.component.html`,

})
export class HeaderComponent {
  title : string = 'App Angular-Spring';

}
