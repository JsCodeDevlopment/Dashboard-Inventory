import { format, isDate, isValid } from 'date-fns';
import { fromZonedTime } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';

/**
 * A utility class for formatting dates and times, specifically for the 'America/Sao_Paulo' timezone.
 * This class provides methods to format dates and times in Brazilian Portuguese locale.
 *
 * @example
 * ```typescript
 * // Import the DateFormatter class
 * import { DateFormatter } from './common/helpers/formatDate';
 *
 * // Example usage of formatDateTime method
 * const dateTimeString = DateFormatter.formatDateTime('2023-10-05T14:48:00.000Z');
 * console.log(dateTimeString); // Output: '05/10/2023 11:48' (depending on the local timezone)
 *
 * // Example usage of formatDate method
 * const dateString = DateFormatter.formatDate('2023-10-05T14:48:00.000Z');
 * console.log(dateString); // Output: '05/10/2023'
 * ```
 */
export class DateFormatter {
  private static toZonedTime(v: unknown): Date | null {
    if (
      typeof v !== 'string' &&
      typeof v !== 'number' &&
      !(v instanceof Date)
    ) {
      return null;
    }

    const zonedDate = fromZonedTime(v, 'America/Sao_Paulo');

    if (!isValid(zonedDate) || !isDate(zonedDate)) {
      return null;
    }

    return zonedDate;
  }

  public static formatDateTime(v: unknown): string {
    const zonedDate = this.toZonedTime(v);
    if (!zonedDate) {
      return '';
    }

    return format(zonedDate, 'Pp', {
      locale: ptBR,
    });
  }

  public static formatDate(v: unknown): string {
    const zonedDate = this.toZonedTime(v);
    if (!zonedDate) {
      return '';
    }

    return format(zonedDate, 'P', {
      locale: ptBR,
    });
  }
}
