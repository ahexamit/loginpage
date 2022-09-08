import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name:'short'
})
 export class ShortPipe implements PipeTransform {
     transform(value: any  ) {
        if (value.length > 4){
            return value.substr(0,4) + "....";

        }
        return value;
     }

 }