import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss'],
})
export class LicenceComponent implements OnInit {
  private permission=uses;
  constructor(private modalAbout:ModalController) { }

  ngOnInit() {}
  async closeModal(){
    this.modalAbout.dismiss()
  }
}
const uses= [{ name: "Commercial use", icon: "checkmark" },
    { name: "Modification", icon: "close" },
    { name: "Distribution", icon: "checkmark" },
    { name: "Private use", icon: "checkmark" },
    { name: "Liability", icon: "close" },
    { name: "Trademark use", icon: "close" },
    { name: "Patent use", icon: "close" },
    { name: "Warranty", icon: "close" }
  ]
 