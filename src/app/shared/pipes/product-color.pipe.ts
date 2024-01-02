import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productColor'
})
export class ProductColorPipe implements PipeTransform {

  transform(value: any): string {
    if (Array.isArray(value) && Object.hasOwn(value[0], 'tag')) {
      return value.map((item) => item.tag).join(', ');
    }

    return value;
  }
}
