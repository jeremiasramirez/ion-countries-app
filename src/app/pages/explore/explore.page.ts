import { Component } from '@angular/core';
import { FeatureService, continents, regions }from "../../services/feature.service"
import { from } from 'rxjs';
import { timer } from 'rxjs'
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ContinentComponent } from 'src/app/components/continent/continent.component';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  providers: [
    FeatureService
  ]
})
export class ExplorePage   {
  public spinner ={on:true}
  public continent;
  public obsContinent$ = from(continents)
  
  constructor(public modal:ModalController, public router:Router, public feature:FeatureService) { 
 
    this.showToExplore();
 
  }


  public showToExplore(){

    timer(800).subscribe(

      ( ) =>{ this.continent = continents},

      ()=>{return},

      ()=>{this.spinner.on=false})

  }

  public onContinent(){
    this.router.navigate(["continent"])
  }
  
  async opentToContinent(data){
    const opn = await this.modal.create({
      component: ContinentComponent,
      componentProps: {data:data}
    })
    opn.present()
  }

}
