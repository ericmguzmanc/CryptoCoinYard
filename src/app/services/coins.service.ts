import { Injectable, } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CoinsModel } from '../shared/coins.model';
import { CoinsGlobalData } from '../shared/coinsGlobalData.model';
import { Configuration } from '../shared/coins.constants';


@Injectable()
export class CoinsService {

	apiUrl: string;
	cccApiUrl: string;

	constructor(private http: Http, private configuration: Configuration){
		this.apiUrl = configuration.COINMARKETCAP_API_URL;
		this.cccApiUrl = configuration.CRYPTOCOINCOMPARE_API_URL;
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

	getCoinsImageUrl(offset: number = 0, limit: number = 0): Observable<any[]> {
		const params: string = [
			`a`,
			`a`
		].join('&');
		const queryUrl = `${this.cccApiUrl}coin/?${params}`;
		return this.http.get(queryUrl)
		.map(res => res.json());
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

}