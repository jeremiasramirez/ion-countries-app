import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FeatureService } from "./services/feature.service"
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    FeatureService
  ]
})
export class AppComponent {
  public color : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public theme:FeatureService
  ) {
    this.initializeApp();
  
 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByName("blue");
      this.splashScreen.hide();
    });
  }
}
