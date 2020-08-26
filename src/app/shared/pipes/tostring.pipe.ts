import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tostring'
})
export class TostringPipe implements PipeTransform {

  transform(value: string[], ...args: any[]): string {
    return value.join('| ');
  }

}
