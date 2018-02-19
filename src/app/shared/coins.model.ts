export class CoinsModel {
	id: string;
	name: string;
	symbol: string;
	rank: string;
	price_usd: string;
	price_btc: string;
	_24h_volume_usd: string;
	market_cap_usd: string;
	available_supply: string;
	total_supply: string;
	max_supply: string;
	percent_change_1h: string;
	percent_change_24h: string;
	percent_change_7d: string;
	last_updated: string;

	constructor(obj?: any){
		this.id                 = obj && obj.id                 || null;
		this.name               = obj && obj.name               || null;
		this.symbol             = obj && obj.symbol             || null;
		this.rank               = obj && obj.rank               || null;
		this.price_usd          = obj && obj.price_usd          || null;
		this.price_btc          = obj && obj.price_btc          || null;
		this._24h_volume_usd    = obj && obj._24_volume_usd     || null;
		this.market_cap_usd     = obj && obj.market_cap_usd     || null;
		this.available_supply   = obj && obj.available_supply   || null;
		this.total_supply       = obj && obj.total_supply       || null;
		this.max_supply         = obj && obj.max_supply         || null;
		this.percent_change_1h  = obj && obj.percent_change_1h  || null;
		this.percent_change_24h = obj && obj.percent_change_24h || null;
		this.percent_change_7d  = obj && obj.percent_change_7d  || null;
		this.last_updated       = obj && obj.last_updated       || null;
	}

}