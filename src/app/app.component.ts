import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyecto-udemy';
   curso: String = 'Matematicas';
   profesor: String = 'Roberto Morillo';
}
