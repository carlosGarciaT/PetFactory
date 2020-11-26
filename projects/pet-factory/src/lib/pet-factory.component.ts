import { Component, Input, OnInit } from '@angular/core';
import { PetFactoryService } from './pet-factory.service';
import { Pet } from './pet.model';

@Component({
  selector: 'lib-petfactory',
  template: `
    <p>
      Se ha insertado la nueva mascota
    </p>
  `,
  styles: [
  ]
})
export class PetFactoryComponent implements OnInit {

  @Input() newPet: Pet;

  constructor(private petFactoryService: PetFactoryService) {
    this.petFactoryService.createPet(this.newPet);
   }

  ngOnInit(): void {
  }

}
