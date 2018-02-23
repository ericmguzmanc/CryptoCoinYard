import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { 
  Router,
  ActivatedRoute
} from '@angular/router';
import { CoinsModel } from '../../shared/coins.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'coin-detail-tabs',
  templateUrl: './coin-detail-tabs.component.html'
})
export class CoinDetailTabsComponent implements OnInit {
  
  @Input() coin: CoinsModel;

  currentTab: number = 0;
  preLoadedTab: any;


  constructor(private route: ActivatedRoute){
    // this.preLoadedTab = this.route.snapshot.params['tab'];
  }

  ngOnInit(){
    console.log('route ', this.preLoadedTab);
    console.log('the coin ', this.coin);
    // this.preloadTab(this.preLoadedTab);
  }

  preloadTab(tab): void {
    switch(tab){
      case 'charts':
        this.currentTab = 0;
      break;
      case 'exchanges':
      this.currentTab = 1;
      break;
      case 'history':
      this.currentTab = 2;
      break;
    }
  }

  selectTab(tab, event):void {
    event.preventDefault();
    this.currentTab = tab;
  }

}