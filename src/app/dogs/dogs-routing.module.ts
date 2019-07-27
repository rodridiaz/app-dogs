import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogComponent } from './dog/dog.component';


const dogsRoutes: Routes = [
  { path: 'dogs', component: DogComponent },
  { path: 'dog/:name', component: DogComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(dogsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DogsRoutingModule { }
