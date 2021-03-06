import { UsersService } from './../../services/users.service';
import { BeliefsService } from './../../services/beliefs.service';
import { AppInfoService } from './../../services/app-info.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public info: AppInfoService,
    public beliefs: BeliefsService,
    private navCtrl: NavController,
    public users: UsersService
  ) { }

  ngOnInit() {
  }

  addBeliefPage() {
    this.navCtrl.navigateRoot('/add-belief');
  }

  delete(statement, scripture){
    this.beliefs.deleteBelief(statement, scripture);
  }

}
