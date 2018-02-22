import { 
	Component, 
	OnInit,
	} from '@angular/core';

import { CoinsModel } from '../shared/coins.model';
import { CoinsService } from '../services/coins.service';
import { 
	Router,
	ActivatedRoute
} from '@angular/router';
import { Configuration } from '../shared/coins.constants';

@Component({
	selector: 'coin-detail',
	templateUrl: './coin-detail.component.html',
	styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
	coinId: string
	coin: CoinsModel;	
	loading: boolean;
	imgBaseUrl: string;

	constructor(private coinsService: CoinsService,
				private router: Router,
				private route: ActivatedRoute,
				private configuration: Configuration){

		this.coinId = this.route.snapshot.params['coin'];
		this.imgBaseUrl = this.configuration.IMG_BASE_URL;
	}

	ngOnInit(): void {
		this.getCoinData();
		this.loading = true;
	}

	getCoinData(): void {
		this.coinsService.getCoinDetail(this.coinId)
		.subscribe(
			(res: CoinsModel) => this.renderCoinDetail(res),
			err => this.logError(err)
		);
	}

	renderCoinDetail(data: CoinsModel): void {
		this.coin = data[0];
		this.loading = false;
	}

	logError(err: any): void {
		console.log('http error ', err );
	}

	getCoinsImageUrl(coin: string): string {
		return this.coinsService.getCoinsImageUrl(coin);
	}

}