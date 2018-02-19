import { Injectable, } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CoinsModel } from '../shared/coins.model';
import { Configuration } from '../shared/coins.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinsService {

	apiUrl: string;

	constructor(private http: Http, private configuration: Configuration){
		this.apiUrl = configuration.COINMARKETCAP_API_URL;
	}


	getCoins(): Observable<CoinsModel[]> {
		const params: string = [
		`limit=100'`
		].join('&');
		const queryUrl = `${this.apiUrl}?${params}`;

		return this.http.get(queryUrl)
		.map(res => res.json());
	}

	getCoinDetail(id: string): Observable<CoinsModel> {
		const params: string = `${id}`;
		const queryUrl = `${this.apiUrl}${params}`;
		
		return this.http.get(queryUrl)
		.map(res => res.json());
	}

}