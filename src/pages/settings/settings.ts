import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	stores: any[];
	ownerData: any[];
	products: any[];
	dashboard: any[];
  policies: any[];
  privacyPolicy: any[];
  relatedProd: any[];
  paymeth: any[];
  config: string = "General";

  constructor(public navCtrl: NavController, private dataFinder : DataFinder, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.stores = data.stores;
    this.ownerData = data.ownerData;
    this.products = data.products;
    this.dashboard = data.dashboard;
    this.policies = data.policies;
    this.privacyPolicy = data.privacyPolicy;
    this.relatedProd = data.relatedProd;
    this.paymeth = data.paymeth;
    }

  OpenAnnouncements(){
    this.navCtrl.push('AnnouncementsPage');
  }

  OpenHistory(){
    this.navCtrl.push('HomePage');
  }

  OpenCancel(){
    this.navCtrl.push('HomePage');
  }

}
