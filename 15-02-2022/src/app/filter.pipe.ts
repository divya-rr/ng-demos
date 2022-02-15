import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[],searchTerm:string):string[] {
    return value.filter(function(search: any){
      return search.toLowerCase().indexOf(searchTerm.toLowerCase())>-1
    });
  }

}
