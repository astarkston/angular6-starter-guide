import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { SharedModule } from '@shared/shared.module';
@Injectable({
  providedIn: SharedModule
})
export class ValuesService {
  constructor(private http: HttpClient) {}

  getValues() {
    return this.http.get('/api/values');
  }
}
