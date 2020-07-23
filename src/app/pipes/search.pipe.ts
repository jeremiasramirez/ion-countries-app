import {  Pipe,PipeTransform } from "@angular/core"
import { timer } from 'rxjs'

@Pipe({
    name: 'search'
})
export class PipeSearch implements PipeTransform{

    transform(data:any,param:any){
        
      
        return data.filter((e)=>{
  
            if(e.name.substring(0,3).toLowerCase() === param.substring(0,3).toLowerCase()) {
                return e
            }
            else{
                return  
            }
              
      
        })
     

    }
}