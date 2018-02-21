export class CoinsGlobalData {
    total_market_cap_usd: string;
    total_24h_volume_usd: string;
    bitcoin_percentage_of_market_cap: number;
    active_currencies: number;
    active_assets: number;
    active_markets: number;
    last_updated: number; //Convert to Date in order to use

    constructor(obj?:any){
        this.total_market_cap_usd              = obj && obj.total_market_cap_usd             || null;
        this.total_24h_volume_usd              = obj && obj.total_24h_volume_usd             || null;
        this.bitcoin_percentage_of_market_cap  = obj && obj.bitcoin_percentage_of_market_cap || null;
        this.active_currencies                 = obj && obj.active_currencies                || null;
        this.active_assets                     = obj && obj.active_assets                    || null;
        this.active_markets                    = obj && obj.active_markets                   || null;
        this.last_updated                      = obj && obj.last_updated                     || null;
    }
}