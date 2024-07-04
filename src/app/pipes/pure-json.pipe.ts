import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureJson'
})
export class PureJsonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
