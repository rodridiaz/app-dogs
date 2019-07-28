import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { endpoints } from '../../environments/endpoints';

import { Dog } from './dog';
import { MessageService} from '../message.service';

export interface IDogsListResponse {
  message?: Dog[];
  status?: string;
}

export interface IDogImagesResponse {
  message?: string[];
  status?: string;
}

const httpOptions = {
  headers: new HttpHeaders({ Accept: 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class DogService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<IDogsListResponse>(environment.apiUrl + endpoints.breedsList, httpOptions).pipe(
      map(response => Object.keys(response.message).map(i => {
        return { name: i, subbreeds: response.message[i] };
      })),
      catchError(this.handleError<Dog[]>('getDogs', []))
    );
  }

  getDogImages(dogName: string): Observable<string[]> {
    return this.http.get<IDogImagesResponse>(`${environment.apiUrl}${endpoints.breed}${dogName}${endpoints.images}`, httpOptions).pipe(
      map(response => response.message),
      catchError(this.handleError<string[]>('getDogImages', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`DogService: ${message}`);
  }
}
