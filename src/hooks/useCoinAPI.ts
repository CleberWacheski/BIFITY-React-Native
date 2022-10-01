import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/coinapi";

interface CoinApi {
    asset_id: string
    name: string,
    type_is_crypto: number,
    data_quote_start: string,
    data_quote_end: string,
    data_orderbook_start: string,
    data_orderbook_end: string,
    data_trade_start: string,
    data_trade_end: string,
    data_symbols_count: number,
    volume_1hrs_usd: number,
    volume_1day_usd: number,
    volume_1mth_usd: number,
    price_usd?: number
    id_icon: string,
    data_start: string,
    data_end: string
}

export interface assetsProps {
    name: string;
    assetId: string;
    price: number;
}

interface ExchangeRate {
    time_period_start: string
    time_period_end: string;
    time_open: string;
    time_close: string;
    rate_open: number;
    rate_high: number;
    rate_low: number;
    rate_close: number;
}


const today = new Date().toISOString()
const SevenDaysBefore = new Date(new Date().setDate(new Date().getDate() - 6)).toISOString()


async function getAssets() {

    const { data: assetsAPI } = await api.get<CoinApi[]>('assets', {
        params: {
            filter_asset_id: 'BTC,ETH,XLM,XRP,ADA'
        }
    })

    const assets = assetsAPI.reduce((acc, asset) => {
        acc.push({
            name: asset.name,
            assetId: asset.asset_id,
            price: (asset.price_usd) ? Number(asset.price_usd.toFixed(2)) : 0
        })

        return acc

    }, [] as assetsProps[])

    return assets
}



async function getExchangeRates(assetID: string) {

    const { data } = await api.get<ExchangeRate[]>(`exchangerate/${assetID}/USD/history?period_id=1DAY&time_start=${SevenDaysBefore}&time_end=${today}`)

    const rates = data.reduce((acc, rate) => {

        acc.push(rate.rate_open)
        acc.push(rate.rate_close)

        return acc

    }, [] as number[])

    return rates
}




export const useAssets = () => {
    return useQuery(['assets'], getAssets)
}


export const useRates = (assetID: string) => {
    return useQuery(['rates'], () => getExchangeRates(assetID))
}







