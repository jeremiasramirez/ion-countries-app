import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController, AlertController, ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import { ReportComponent } from 'src/app/components/report/report.component';
import { AboutPhoneComponent } from 'src/app/components/about-phone/about-phone.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage  {
  private checkedTheme: boolean = false;
  private version:string = "2.0.0";

  constructor(
      private alert:AlertController,
      private toasts: ToastController,
      private router:Router,
      private actionSheet:ActionSheetController,
      private modalReport:ModalController,
      private modalAbout:ModalController) {

    this.verifiedStatusTheme();
  }

  private async msjToast(){
    const toast = await this.toasts.create({
      message: "Caché delete",
      duration: 3000,
      buttons: [
        {text: 'Ok'}
      ]
    })

    await toast.present()
  }

  public verifiedStatusTheme(){
    if(localStorage.getItem("theme")  == "dark"){
      this.checkedTheme=true
    }
    else{
      this.checkedTheme=false
    }
     
  }
  public active(e){
    const localStorages = localStorage.getItem("theme");

    document.body.classList.toggle('dark');
    
    if (this.checkedTheme === false){
      this.checkedTheme = true
      localStorage.setItem("theme", "dark");
     
    }
    else {
      this.checkedTheme = false; 
      localStorage.setItem("theme", "tertiary");
      
    }
     //this.router.navigate(["/home"])
  }

  public deleteCache(){
    localStorage.clear(); 
    timer(1000).subscribe(()=>{ this.msjToast()})
  }

  public async openSheet(){
    
    const sheet = await this.actionSheet.create({
      header: "Caché",
      backdropDismiss: false,
      buttons: [
        {text: "Delete", handler:()=>this.deleteCache(), icon: 'trash'},
        {text: "Cancel", icon:'close'}
      ]
    })

    await sheet.present()
    

  }

  public async openVersion(){

    const alerts = await this.alert.create({
      header: "Version",
      subHeader: "Release",
      message: this.version,
      backdropDismiss: false,
      buttons:[ {text: 'Ok', handler:()=>alerts.dismiss()}]
    })
    await alerts.present()
  }

  public async openReport(){

    const report = await this.modalReport.create({
      component: ReportComponent
    })
    
    await report.present()

  }

  public async aboutPhone(){

    const aboutPh = await this.modalAbout.create({
      component: AboutPhoneComponent
    })
    
    await aboutPh.present()

  }


}
 