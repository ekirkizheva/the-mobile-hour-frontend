import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFeatures'
})
export class ProductFeaturesPipe implements PipeTransform {

  transform(value: any): string {
    if (Array.isArray(value) && value.length && Object.hasOwn(value[0], 'storage')) {
      return `Storage: ${value.map((item) => item.storage).join(', ')}`;
    }

    return value;
  }
}
