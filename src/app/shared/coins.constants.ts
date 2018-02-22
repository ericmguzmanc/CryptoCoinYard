import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
	public COINMARKETCAP_API_URL: string = 'https://api.coinmarketcap.com/v1/';
	public CRYPTOCOINCOMPARE_API_URL: string = 'https://www.cryptocompare.com/';
	public IMG_BASE_URL: string = '../../assets/images/svg/color/';
}