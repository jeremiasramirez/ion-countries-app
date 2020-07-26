import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-about-phone',
  templateUrl: './about-phone.component.html',
  styleUrls: ['./about-phone.component.scss'],
})
export class AboutPhoneComponent implements OnInit {

  constructor(public modalAbout:ModalController) { }

  ngOnInit() {}
  async closeModal(){
    this.modalAbout.dismiss()
  }
}
