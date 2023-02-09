import { valueConverter } from 'aurelia';

@valueConverter('date')
export class FormatDate {
  toView(value: string, locale = 'en-US') {
    const date = new Date(value);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    const format = Intl.DateTimeFormat(locale, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    });

    if (Number.isNaN(date.valueOf())) {
      return 'Invalid Date';
    }

    return format.format(date);
  }
}