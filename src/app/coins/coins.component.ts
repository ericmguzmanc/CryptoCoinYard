import { 
	Component,
	OnInit,
	Output,
	EventEmitter
 } from '@angular/core';

import { CoinsService } from '../services/coins.service';
import { CoinsModel } from '../shared/coins.model';
import { CoinsGlobalData } from '../shared/coinsGlobalData.model';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Configuration } from '../shared/coins.constants';

@Component({
	selector: 'coins',
	templateUrl: './coins.component.html',
	styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
	imgBaseUrl: string;
	loading: boolean;
	coins: CoinsModel[];
	offset: number = 0;
	limit: number = 20;
    active_currencies: number;
	/*
	 * @Output onCoinSelected - outputs the current coin
	 *          whenever a coin is selected
	 */
	// @Output() onCoinSelected: EventEmitter<CoinsModel>;

	constructor(
		private coinsService: CoinsService, 
		private router: Router){
	}

	ngOnInit(): void {
		this.coinGlobalData();
	}

	coinGlobalData(): void {
		this.coinsService.getCoinsGlobalData()
		.subscribe(
			(res: CoinsGlobalData) => { 
				this.active_currencies = res.active_currencies 
				this.getCoins(this.offset, this.limit);
			}
		);
	}

	getCoins(offset: number, limit: number): void {
		this.loading = true;
		// this.coins = [];
		this.coinsService.getCoins(offset, limit)
		.subscribe((res: CoinsModel[]) => this.renderCoinsData(res)); 
	}

	renderCoinsData(res: CoinsModel[]): void {
		this.coins = res;
		this.loading = false;
	}

	coinDetail(coin: CoinsModel): void {
		if(coin){
			this.router.navigateByUrl('/coins/detail/'+coin);//{queryParams: { coin: coin } });
		}
	}

	onPageChange(offset) {
		this.offset = offset;
		this.getCoins(offset, this.limit);
	}

	getCoinsImageUrl(coin: string): string {
		return this.coinsService.getCoinsImageUrl(coin);
	}

}