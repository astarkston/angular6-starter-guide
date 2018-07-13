import { Utilities } from '@shared/services/utils';
import { Constants } from '@shared/services/constants';

export enum DateFilterTypes {
  None = 0,
  Day = 1,
  Week = 2,
  Month = 3,
  BiMonth = 4,
  Quarter = 5,
  SemiAnnual = 6,
  Annual = 7
}

const _formatter = (type: DateFilterTypes) => {
  if (Utilities.isDefined(type)) {
    switch (type) {
      case DateFilterTypes.None:
        return Constants.DateFilterTypes.None;
      case DateFilterTypes.Day:
        return Constants.DateFilterTypes.Day;
      case DateFilterTypes.Week:
        return Constants.DateFilterTypes.Week;
      case DateFilterTypes.Month:
        return Constants.DateFilterTypes.Month;
      case DateFilterTypes.BiMonth:
        return Constants.DateFilterTypes.BiMonth;
      case DateFilterTypes.Quarter:
        return Constants.DateFilterTypes.Quarter;
      case DateFilterTypes.SemiAnnual:
        return Constants.DateFilterTypes.SemiAnnual;
      case DateFilterTypes.Annual:
        return Constants.DateFilterTypes.Annual;
    }
  }
  return '<Date Filter>';
};

export const DateFilterToString = _formatter;
