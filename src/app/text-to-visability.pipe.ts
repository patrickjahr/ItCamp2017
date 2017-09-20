import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringvisibility'
})
export class TextToVisabilityPipe implements PipeTransform {

    transform(text: string, search: string): string {
      if (search && text && search.length > 2) {
        search = search.trim();
        let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        pattern = pattern.split(' ').filter((t) => {
          return t.length > 0;
        }).join('|');
        const regex = new RegExp(pattern, 'gi');
  
        if (search === '' || text.match(regex)) {
          return '';
        }
        return 'hidden';
      } else {
        return '';
      }
    }
  }
  