import { NgModule } from '@angular/core';
import { PetFactoryComponent } from './pet-factory.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PetFactoryComponent],
  imports: [FormsModule],
  exports: [PetFactoryComponent, FormsModule],
})
export class PetFactoryModule {}
