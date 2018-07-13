import { Subscription } from 'rxjs';
import { trimEnd, endsWith, chain, first, last, orderBy, isUndefined } from 'lodash';
import { Constants } from '@shared/services/constants';

export abstract class Utilities {
  /**
   * Equivalent to C# string.Empty
   */
  public static readonly stringEmpty: string = '';

  /**
   * Unsubscribe from an observable subscription at the end of its lifecycle
   * @param args Array of subscriptions to unsubscribe from
   */
  public static readonly destroySubscriptions = function(...args: Subscription[]): void {
    args.forEach(s => {
      if (Utilities.isDefined(s) && (s[Constants.Observables.Closed] && !s.closed)) {
        s.unsubscribe();
      }
    });
  };

  /**
   * Get the plural term for a word based on a number of records
   * @param noun The word to pluralize in its singluar form, e.g. "article"
   * @param pluralTerm The character added to the end of the word to make it plural, e.g. "s"
   * @param count The number of records in the result set
   */
  public static readonly pluralize = (noun: string, pluralTerm: string, count: number) => {
    // initialization
    noun = trimEnd(noun, ' Ss');
    chain(noun)
      .trimEnd(' Ss')
      .lowerCase()
      .value();
    const pluralTrimLength: number = endsWith(noun, 'ex') ? 2 : 1;
    const plural =
      pluralTerm === 's'
        ? noun
        : count !== 1
          ? noun.substring(0, noun.length - pluralTrimLength)
          : noun;
    // return
    return `${plural}${count === 1 ? '' : pluralTerm}`;
  }

  /**
   * Wrapper around lodash _.first(), get the first item in an array
   * @param array Array data source
   */
  public static readonly first = function<T>(array: Array<T>): T {
    return first(array);
  };

  /**
   * Wrapper around lodash _.last(), get the first item in an array
   * @param array Array data source
   */
  public static readonly last = function<T>(array: Array<T>): T {
    return last(array);
  };

  /**
   * Wrapper around lodash _.orderBy(), sort items in an array by any number of properties
   */
  public static readonly orderBy = function<T>(
    array: Array<T>,
    iteratee?: string | Array<string>,
    orders?: string | Array<string>
  ): Array<T> {
    return orderBy(array, iteratee, orders);
  };

  /**
   * Check if value is undefined or null
   */
  public static readonly isUndefinedOrNull = (value: any): boolean =>
    isUndefined(value) || value === null

  /**
   * Check if value is defined
   */
  public static readonly isDefined = (value: any): boolean =>
    !(isUndefined(value) || value === null)
}
