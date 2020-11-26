import { NgModule } from '@angular/core';
import { PetFactoryComponent } from './pet-factory.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PetFactoryComponent],
  imports: [
    HttpClientModule
  ],
  exports: [PetFactoryComponent]
})
export class PetFactoryModule { }
