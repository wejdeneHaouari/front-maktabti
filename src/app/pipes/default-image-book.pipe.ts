import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImageBook'
})
export class DefaultImageBookPipe implements PipeTransform {
  defaultImagePath = '../../../assets/img/images/item-03.jpg';
  transform(value: any, args?: any): any {
    if (!value || !value.trim().length) {
      return this.defaultImagePath;
    }
    return value;
  }


}
