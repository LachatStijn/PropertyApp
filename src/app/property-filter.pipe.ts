import { Pipe, PipeTransform } from '@angular/core';
import { Property } from './property/property.model';

@Pipe({
  name: 'propertyFilter',
  pure:false
})
export class PropertyFilterPipe implements PipeTransform {

  transform(properties: Property[], gemeente: string): Property[] {
    if(!gemeente || gemeente.length === 0){
      return properties; 
    }

    return properties.filter(p => 
      p.location.district.toLowerCase().startsWith(gemeente.toLowerCase())
    );
  }

}
