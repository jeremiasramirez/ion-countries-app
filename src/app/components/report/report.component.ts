import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {

  constructor(public toast:ToastController, public closeModals:ModalController) { }

  ngOnInit() {}
  public async closeModal(){
    const modalClose = await this.closeModals.dismiss()
  }

  public async sendReport(){
    const toasts = await this.toast.create({
      message: 'Report successfully ',
      mode:"ios",
      buttons:[{text: 'Ok', handler: ()=>this.closeModal()}],
      duration: 4000
    })
    toasts.present()
  }
}
