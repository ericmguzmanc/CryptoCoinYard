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
import { PaginationComponent } from './pagination/pagination.component';



const routes: Routes = [
	{path: '', redirectTo: 'coins', pathMatch: 'full'},
	{path: 'coins', component: CoinsComponent},
	{path: 'coins/detail/:coin', component: CoinDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinDetailComponent,
    PaginationComponent
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
