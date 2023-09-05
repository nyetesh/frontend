export class CommonUtils {
  static convertToDuration(content: string): number {
    const duration = content.split(' ');

    const requiredDuration: any = duration[0];
    if (duration[1] === 'year') {
      return requiredDuration * 12;
    } else if (duration[0] === 'month') {
      return requiredDuration;
    } else {
      return 0;
    }
  }

  static dateTypeToString(dateValue: string): string {
    const date = new Date(dateValue);
    const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}
