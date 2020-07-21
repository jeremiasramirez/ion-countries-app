import { Component } from '@angular/core';
import  { CountryService , typeResponse} from "../../services/country.service"
import  { DarkService } from "../../services/theme.service"
import { timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
  providers: [
    CountryService,
    DarkService
  ]
})
export class AllPage   {

  public ALL_DATA : typeResponse;
  public startData:number = 0;
  public endData: number = 10;
  public spinner = { on:true}
  public color : any;
  constructor(public darkService: DarkService,public countryService: CountryService) {
    if(!localStorage.getItem("themes")) localStorage.setItem("themes", "tertiary")
    this.color=this.darkService.getColorTheme()
    this.getAllData();
   
  }
  public getAllData(){
    this.countryService.getall().pipe(delay(400)).subscribe((resp:typeResponse)=> {
      this.ALL_DATA = resp
    },
    ()=>{return},
    ()=>{
      this.spinner.on=false
    })

  }
  public changeMore(e:any){
    
    timer(1000).subscribe(()=>{
      this.endData += 10;
      e.target.complete()
    })
  }

  
}
