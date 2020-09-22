import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { ComponentModule } from './components/component.module';
import { PipeSearch } from './pipes/search.pipe';
import { ContinentComponent } from './components/continent/continent.component';

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     ComponentModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
