import { Injectable } from '@angular/core';

import { BehaviorSubject ,  Observable } from 'rxjs';
import { isEqual } from 'lodash';

@Injectable()
export class DataTrackerService {
  private _currentData: BehaviorSubject<string>;

  get data$() {
    return this._currentData.asObservable();
  }

  constructor() {
    this._currentData = new BehaviorSubject<string>(null);
  }

  setData(data: string): void {
    if (isEqual(data, this._currentData.value)) {
      return;
    }
    this._currentData.next(data);
  }

  clearData(): void {
    this._currentData.next(null);
  }
}
