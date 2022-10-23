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


const ASSETS = ['BTC', 'ETH', 'XLM', 'XRP', 'ADA','VERI','KLAY','LYXE','USTC','TKX','NEO','APT',
'USDT','USDC','BNB','XRP','BUSD','SOL','DOGE','MATIC',
'DOT','HEX','TRX','SHIB','WBTC','AVAX','UNI','LEO','LTC','LINK',
'ATOM','FTT','CRO','XMR','NEAR','ALGO','BCH','QNT','BTCB','TON','VET','FIL','FLOW',
'LUNC','APE','FRAX','HBAR','HT','EGLD','ICP','XCN','XTZ','AAVE','BKM','$DOSA',
'GLB','EARN','WEB3','CRAMER','SKELETON','LUNC','SHIB']


const today = new Date().toISOString()
const SevenDaysBefore = new Date(new Date().setDate(new Date().getDate() - 6)).toISOString()


async function getAssetStatus(assetID: string) {



    const { data: assetStatus } = await api.get<ExchangeRate[]>(`exchangerate/${assetID}/USD/history?period_id=1DAY&time_start=${SevenDaysBefore}&time_end=${today}`)

    const yesterdayValue = assetStatus[assetStatus.length - 2].rate_open
    const todayValue = assetStatus[assetStatus.length - 1].rate_close
    const percentege = (yesterdayValue / todayValue).toFixed(4)

    const SevenLastRates = assetStatus.reduce((acc, asset) => {

        acc.push(asset.rate_close)

        return acc
    }, [] as number[])

    const status = {
        percentege,
        SevenLastRates,
    }

    return status
}




async function getAssets() {

    const { data: assetsData } = await api.get<CoinApi[]>('assets', {
        params: {
            filter_asset_id: ASSETS.toString()
        }
    })

    const assets = assetsData.reduce((acc, asset) => {

        acc.push({
            name: asset.name,
            assetId: asset.asset_id,
            price: (asset.price_usd) ? Number(asset.price_usd.toFixed(2)) : 0
        })

        return acc

    }, [] as assetsProps[])

    return assets
}


export const useStatus = (assetID: string) => {

    return useQuery(['status'], () => getAssetStatus(assetID))
}

export const useAssets = () => {

    return useQuery(['assets'], getAssets)

}






