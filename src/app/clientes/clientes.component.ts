import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  clientes : Cliente[] = [
{id: 1, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'},
{id: 2, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'},
{id: 3, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'},
{id: 4, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'},
{id: 5, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'},
{id: 6, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'},
{id: 7, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'},
{id: 8, nombre: 'Santiago', apellido: 'Ortiz', email: 'Sortiz@gmail.com', createAt: '2012-10-24'}

  ];
}
