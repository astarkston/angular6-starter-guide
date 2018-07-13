import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeLogicService } from './logic.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Utilities } from '@shared/services/utils';
import { ValuesService } from '@shared/services/api';
import { Router } from '../../../node_modules/@angular/router';
import { RouteNames } from '../routing/route-names';

@Component({
  selector: 'starter-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: number[];
  private _data$: Subscription;

  constructor(
    private logic: HomeLogicService,
    private service: ValuesService,
    private router: Router
  ) {}

  ngOnInit() {
    const sub$ = this.service.getValues().subscribe(_ => {
      // do something with your data
      Utilities.destroySubscriptions(sub$);
    });

    const dropdownData: any[] = this.logic.createDropdownData();

    this._data$ = this.logic
      .getSomeObservableData()
      .pipe(filter(_ => Utilities.isDefined(_)))
      .subscribe(_ => {
        this.data = _;
      });
  }

  testRouting() {
    this.router.navigateByUrl(RouteNames.Test);
  }

  ngOnDestroy() {
    Utilities.destroySubscriptions(this._data$);
  }
}
