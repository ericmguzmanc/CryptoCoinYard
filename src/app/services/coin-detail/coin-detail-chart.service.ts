import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Configuration } from '../../shared/coins.constants';

@Injectable()
export class CoinDetailChartService {
  
  apiUrl: string;

  constructor(
        private http: Http,
        private configuration: Configuration){
      this.apiUrl = configuration.HISTORICAL_DATA_URL;
  }

  getHistoricalDaily(fsym, tsym): Observable<any> {
    const params = [
      `fsym=${fsym}`,
      `tsym=${tsym}`
    ].join('&')
    const queryUrl = `${this.apiUrl}histoday?${params}`;
    return this.http.get(queryUrl)
    .map(res => res.json());
  }


}