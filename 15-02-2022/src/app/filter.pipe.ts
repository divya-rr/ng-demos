import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[],searchTerm:string):string[] {
    // if(value.indexOf(searchTerm)===-1)
    //  return ["No data found"];
    if(!value || !searchTerm){
      return value
    }
 
    return value.filter(search=>{
      
      return search.toLowerCase().indexOf(searchTerm.toLowerCase())>-1
    });
  }

}

