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

@Component({
	selector: 'coin-detail',
	templateUrl: './coin-detail.component.html',
	styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
	coinId: string
	coin: CoinsModel;	
	loading: boolean;

	constructor(private coinsService: CoinsService,
							private router: Router,
							private route: ActivatedRoute){
		this.coinId = this.route.snapshot.params['coin'];
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
		console.log('data  ', data);
	}

	logError(err: any): void {
		console.log('http error ', err );
	}

}