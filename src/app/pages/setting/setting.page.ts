import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage  {
  public checkedTheme: boolean = false;


  constructor(public toasts: ToastController,public router:Router, public actionSheet:ActionSheetController) {

    this.verifiedStatusTheme();
  }

  public async msjToast(){
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
}
 