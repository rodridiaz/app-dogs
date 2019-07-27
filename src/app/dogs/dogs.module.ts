import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { DogsRoutingModule } from './dogs-routing.module';

@NgModule({
  declarations: [DogComponent],
  imports: [
    CommonModule,
    DogsRoutingModule
  ]
})
export class DogsModule { }
