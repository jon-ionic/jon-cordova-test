import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(platform: Platform) {
    platform.ready().then(() => {
      console.log(`platform: ${platform.is('cordova')}`)
    })
  }
}
