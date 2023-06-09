import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      sexo: 'Masculino',
      salario: 25000,
    },
    {
      id: 2,
      nombre: 'Marcos',
      apellido: 'Gonzalez',
      sexo: 'Masculino',
      salario: 65000,
    },
    {
      id: 3,
      nombre: 'Marta',
      apellido: 'Garcia',
      sexo: 'Femenino',
      salario: 75000,
    },
    {
      id: 4,
      nombre: 'Ignacio',
      apellido: 'Navarro',
      sexo: 'Masculino',
      salario: 55000,
    },
    {
      id: 5,
      nombre: 'Mario',
      apellido: 'Navarro',
      sexo: 'Femenino',
      salario: 80000,
    },
    {
      id: 6,
      nombre: 'Joaquin',
      apellido: 'Marquez',
      sexo: 'Masculino',
      salario: 80000,
    },
  ];

  radioButtonSeleccionado = 'Todos';


  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length
  }

  empleadoCountRadio(radioButtonSelect: string): void {
    this.radioButtonSeleccionado = radioButtonSelect
  }

}
