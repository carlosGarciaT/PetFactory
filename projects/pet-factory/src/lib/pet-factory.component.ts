import { Component, Input, OnInit } from '@angular/core';
import { PetFactoryService } from './pet-factory.service';
import { Pet } from './pet.model';

@Component({
  selector: 'lib-petfactory',
  template: `
    <form>
      <label for="name">Name: </label>
      <input type="text" name="name" [(ngModel)]="newPet.name" /><br />
      <label for="status">Status: </label>
      <select name="status" [(ngModel)]="newPet.status">
        <option value="available" selected>Available</option>
        <option value="pending">Pending</option>
        <option value="sold">Sold</option></select
      ><br />
      <input type="submit" value="Guardar" (click)="onSubmit()" />
    </form>
  `,
  styles: [],
})
export class PetFactoryComponent implements OnInit {
  @Input() newPet: Pet;
  status: number;

  constructor(private petFactoryService: PetFactoryService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.status = this.petFactoryService.createPet(this.newPet);
    if (this.status === 1) {
      alert('Se ha insertado correctamente la mascota');
    } else {
      alert('No se ha insertado correctamente la mascota');
    }
  }
}
