import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class HomeLogicService {

  constructor() { }

  createDropdownData() {
    return ['Option 1', 'Option 2', 'Option 3'];
  }

  getSomeObservableData(): Observable<number[]> {
    return of([44, 21, 59, 8, 27, 15, null]);
  }
}
