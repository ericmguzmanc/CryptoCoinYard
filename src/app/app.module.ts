import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import {
	RouterModule,
	Routes,
	ActivatedRoute
} from '@angular/router';
import {
	LocationStrategy,
	HashLocationStrategy,
} from '@angular/common';

//Configuration
import { Configuration } from './shared/coins.constants';

//Services
import { CoinsService } from './services/coins.service';

//Components
import { CoinsComponent } from './coins/coins.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { AppComponent } from './app.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { CoinDetailTabsComponent } from './coin-detail/coin-detail-tabs/coin-detail-tabs.component';
import { CoinDetailChartComponent } from './coin-detail/coin-detail-tabs/coin-detail-chart/coin-detail-chart.component';
import { CoinDetailExchangesComponent } from './coin-detail/coin-detail-tabs/coin-detail-exchanges/coin-detail-exchanges.component';
import { CoinDetailHistoryComponent } from './coin-detail/coin-detail-tabs/coin-detail-history/coin-detail-history.component';


const routes: Routes = [
	{path: '', redirectTo: 'coins', pathMatch: 'full'},
	{path: 'coins', component: CoinsComponent},
  {
    path: 'coins/detail/:coin',
    component: CoinDetailComponent,
    // children: [
    //   {path: '', redirectTo: 'charts', pathMatch: 'full'},
    //   {path: 'charts', component: CoinDetailComponent},
    //   {path: 'exchanges', component: CoinDetailComponent},
    //   {path: 'history', component: CoinDetailComponent}
    // ]
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinDetailComponent,
    PaginationComponent,
    CoinDetailTabsComponent,
    CoinDetailChartComponent,
    CoinDetailExchangesComponent,
    CoinDetailHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  	{provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: CoinsService, useClass: CoinsService},
    {provide: Configuration, useClass: Configuration}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
