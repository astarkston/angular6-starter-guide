import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AMPInterceptor } from '@shared/interceptors/http.interceptor';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AMPInterceptor,
        multi: true
      }],
    declarations: [DropdownComponent],
    exports: [DropdownComponent]
})
export class SharedModule {}
