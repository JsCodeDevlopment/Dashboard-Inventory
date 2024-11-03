interface FormatHelperToMoneyProps {
  locale: "pt-BR";
  currency: string;
}

/**
 * Helper class for formatting various types of data.
 *
 * @example
 * // Convert a string to numbers only
 * const numbers = FormatHelper.toNumbers("abc123"); // "123"
 *
 * @example
 * // Convert a number to a percentage string
 * const percentage = FormatHelper.toPercentage(0.1234); // "12.34%"
 *
 * @example
 * // Format a number as currency
 * const money = FormatHelper.toMoney(1234.56, { locale: 'en-US', currency: 'USD' });
 * // {
 * //   symbol: "$",
 * //   number: "1,234.56",
 * //   conversion: "$1,234.56"
 * // }
 *
 * @example
 * // Format a phone number with Brazilian DDD
 * const phone = FormatHelper.toPhone('55', '11987654321'); // "(11) 98765-4321"
 */

export class FormatHelper {
  static toNumbers(string: string) {
    return String(string).replace(/[^\d]/g, '');
  }

  static toPercentage(value: number, fractionDigits: number = 2): string {
    return `${(value * 100).toFixed(fractionDigits)}%`;
  }

  static toMoney(
    value?: number,
    { locale, currency }: FormatHelperToMoneyProps = {
      locale: 'pt-BR',
      currency: 'BRL',
    },
  ) {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    });

    const formattedParts = formatter.formatToParts(value ?? 0);

    return {
      symbol: formattedParts[0].value,
      number: formattedParts
        .slice(1)
        .map(({ value }) => value)
        .join(''),
      conversion: formatter.format(value ?? 0),
    };
  }

  static toPhone(ddd: '55' | string, value: string) {
    if (ddd === '55') {
      if (value.length > 11) {
        value = value.slice(0, 11);
      }
      if (value.length === 10) {
        return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      }
      if (value.length === 11) {
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
    }

    return value;
  }
}
