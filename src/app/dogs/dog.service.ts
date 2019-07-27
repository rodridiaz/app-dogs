import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Dog } from './dog';
import { DOGS, DOGS_IMAGES } from './mock-dogs';

@Injectable({
  providedIn: 'root',
})
export class DogService {

  constructor() { }

  getDogs(): Observable<Dog[]> {
    return of(DOGS).pipe(
      map(response => Object.keys(response.message).map(i => {
        return { name: i, subbreeds: response.message[i] };
      }))
    );
  }

  getDogImages(dogName: string) {
    return of(DOGS_IMAGES).pipe(
      map(response => response.message)
    );
  }
}
