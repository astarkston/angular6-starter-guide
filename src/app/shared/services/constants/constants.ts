import { Subscription } from 'rxjs';

export namespace Constants {
  export abstract class DateFilterTypes {
    public static readonly None: string = 'None';
    public static readonly Day: string = 'Today';
    public static readonly Week: string = 'Last 7 Days';
    public static readonly Month: string = 'Last 30 Days';
    public static readonly BiMonth: string = 'Last 60 Days';
    public static readonly Quarter: string = 'Last 90 Days';
    public static readonly SemiAnnual: string = 'Last 6 Months';
    public static readonly Annual: string = 'Last Year';
  }

  export abstract class Errors {
    public static readonly DefaultMessage: string = 'An error has occurred';
  }

  export abstract class Observables {
    public static readonly Closed: keyof Subscription = 'closed';
  }
}
