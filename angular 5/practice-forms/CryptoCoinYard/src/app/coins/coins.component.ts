import { 
	Component,
	OnInit,
	Output,
	EventEmitter
 } from '@angular/core';

import { CoinsService } from '../services/coins.service';
import { CoinsModel } from '../shared/coins.model';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	selector: 'coins',
	templateUrl: './coins.component.html',
	styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
	loading: boolean;
	coins: CoinsModel[];

	/*
	 * @Output onCoinSelected - outputs the current coin
	 *          whenever a coin is selected
	 */
	// @Output() onCoinSelected: EventEmitter<CoinsModel>;

	constructor(private coinsService: CoinsService, private router: Router){
	}

	ngOnInit(): void {
		this.getCoins();
	}

	getCoins(): void {
		this.loading = true;
		this.coinsService.getCoins()
		.subscribe((res: CoinsModel[]) => this.renderCoinsData(res)); 
	}

	renderCoinsData(res: CoinsModel[]): void {
		this.coins = res;
		this.loading = false;
	}

	coinDetail(coin: CoinsModel): void {
		if(coin){
			this.router.navigateByUrl('/coins/detail/'+coin});//{queryParams: { coin: coin } });
		}
	}



}