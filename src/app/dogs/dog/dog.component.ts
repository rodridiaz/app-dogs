import { switchMap, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable} from 'rxjs';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dogs$: Observable<Dog[]>;
  dogImages$: Observable<string[]>;
  selectedName: string;

  constructor(
    private route: ActivatedRoute,
    private service: DogService
  ) { }

  ngOnInit() {
    this.dogs$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getDogs().pipe(
          tap(this.selectedName = undefined),
          tap((data) => this.selectedName = data.find(ele => ele.name === params.get('name')) ? params.get('name') : undefined)
        );
      })
    );
    this.dogImages$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getDogImages(params.get('name')))
    );
  }

}
