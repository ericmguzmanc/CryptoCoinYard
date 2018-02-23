import { Injectable, } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CoinsModel } from '../shared/coins.model';
import { CoinsGlobalData } from '../shared/coinsGlobalData.model';
import { Configuration } from '../shared/coins.constants';
import { Title } from '@angular/platform-browser';


@Injectable()
export class CoinsService {

	apiUrl: string;
	cccApiUrl: string;
	imgBaseUrl: string;

	constructor(
			private http: Http,
			private configuration: Configuration,
			private titleService: Title){

		this.apiUrl = configuration.COINMARKETCAP_API_URL;
		this.cccApiUrl = configuration.CRYPTOCOINCOMPARE_API_URL;
		this.imgBaseUrl = configuration.IMG_BASE_URL;
	}

	//start=100&limit=10
	getCoins(offset: number = 0, limit: number = 0): Observable<CoinsModel[]> {
		const params: string = [
		`start=${offset}`,	
		`limit=${limit}`
		].join('&');
		const queryUrl = `${this.apiUrl}ticker/?${params}`;
		return this.http.get(queryUrl)
		.map(res => res.json());
	}

	getCoinsImageUrl(coinSymbol: string): string {
		coinSymbol = coinSymbol.toLocaleLowerCase();
		return this.imgBaseUrl + coinSymbol + '.svg';
	}

	getCoinDetail(id: string): Observable<CoinsModel> {
		const params: string = `${id}`;
		const queryUrl = `${this.apiUrl}ticker/${params}`;
		return this.http.get(queryUrl)
		.map(res => res.json());
	}

	getCoinsGlobalData(): Observable<CoinsGlobalData> {
		const queryUrl = `${this.apiUrl}global/`;
		return this.http.get(queryUrl)
		.map(res => res.json());
	}

	setTitle(newTitle: string, priceUSD): void {
		newTitle = (priceUSD) ? newTitle + ' (BTC) $' + priceUSD : newTitle;
		this.titleService.setTitle(newTitle);
	}

}