import { Component } from "@angular/core";

@Component( {
  //El Selector es la etiqueta de nuestro footer.component.html con este luego podremos
  //crear un tag en nuestro app.component para llamar nuestro footer completo
selector : 'app-Footer',
templateUrl : `./footer.component.html`,
styleUrls : ['./footer.component.css']
})
export class FooterComponent{
  //usamos any para definir un objeto sin usar una libreria o un archivo de extension(se llama este objeto en footer.component.html)
public autor : any = {nombre : 'Juan', apellido : 'Perez'};
}
