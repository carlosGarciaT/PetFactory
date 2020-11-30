import { NgModule } from '@angular/core';
import { PetFactoryComponent } from './pet-factory.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PetFactoryComponent],
  imports: [
    HttpClientModule,
    FormsModule
  ],
  exports: [PetFactoryComponent]
})
export class PetFactoryModule { }
