import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bcolor'
})
export class BcolorPipe implements PipeTransform {

  transform(value: number): string {
    return value < 100 ? 'highlight' : '';
  }

}
