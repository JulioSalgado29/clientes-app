import { Component, OnInit } from '@angular/core';
import { Cliente } from './service/cliente';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] 
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => {this.clientes = clientes}
    );
  }

}
