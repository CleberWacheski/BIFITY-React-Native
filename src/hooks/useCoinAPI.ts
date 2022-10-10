import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    percentege: string;
    SevenLastRates: number[];
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


const ASSETS = ['BTC', 'ETH', 'XLM', 'XRP', 'ADA']

const today = new Date().toISOString()
const SevenDaysBefore = new Date(new Date().setDate(new Date().getDate() - 6)).toISOString()


async function getAssets(assetId: string[]) {


    //const { data: assetsData } = await api.get<CoinApi[]>(`assets/${assetId}`)

    const endpoints = ASSETS.map((asset) => `exchangerate/${asset}/USD/history?period_id=1DAY&time_start=${SevenDaysBefore}&time_end=${today}`)

    const data = await axios.all(endpoints.map((endpoint) => api.get(endpoint)))

    const priceStatus = data.map((request) => request.data)


    //const { data: priceStatus } = await api.get<ExchangeRate[]>(`exchangerate/${assetId}/USD/history?period_id=1DAY&time_start=${SevenDaysBefore}&time_end=${today}`)

    // const yesterdayValue = PriceStatus[PriceStatus.length - 2].rate_open
    // const todayValue = PriceStatus[PriceStatus.length - 1].rate_close

    // const percentege = (yesterdayValue / todayValue).toFixed(4)

    // const SevenLastRates = PriceStatus.reduce((acc, asset) => {

    //     acc.push(asset.rate_close)

    //     return acc
    // }, [] as number[])


    // const assets = assetsData.reduce((acc, asset) => {
    //     return {
    //         name: asset.name,
    //         assetId: asset.asset_id,
    //         percentege,
    //         SevenLastRates,
    //         price: (asset.price_usd) ? Number(asset.price_usd.toFixed(2)) : 0
    //     }

    // }, {} as assetsProps)

    return JSON.stringify(priceStatus, null, 3)
}


export const useAssets = () => {


    const { data, isLoading } = useQuery(['assets'], () => getAssets(ASSETS))


    return {
        data,
        isLoading
    }
}






