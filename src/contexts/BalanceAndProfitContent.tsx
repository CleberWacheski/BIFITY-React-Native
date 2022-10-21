import { createContext, ReactNode, useState } from "react";
import { useAssets } from "../hooks/useCoinAPI";


interface BalanceProps {
    coin: {
        name: string;
        startValue: number;
        id: string;
    },
    value: number;
    date: Date;
}

//  balance.value => 100%
//  sumaryBalance = x 
//  x = sumaryBalance * 100 / balance.value
//
//



interface BalanceContextProps {

    addNewBalanceDate: (data: BalanceProps) => void;
    balance: BalanceProps[]
    sumaryBalance: number;
    sumaryProfit: number;
    percenteges: {
        balance: number;
    }
}

interface BalaceAndProfitProviderProps {
    children: ReactNode;
}



export const BalanceAndProfitContent = createContext({} as BalanceContextProps)



export const BalaceAndProfitProvider = ({ children }: BalaceAndProfitProviderProps) => {

    const { data: assets } = useAssets()

    const [balance, setBalance] = useState<BalanceProps[]>([])

    const TotalBalance = balance.reduce((acc, balance) => {
        return acc + balance.value
    }, 0)

    const TotalProfit = balance.reduce((acc, balance) => {

        const refreshCoinValue = assets!.find((asset) => asset.assetId === balance.coin.id)!.price

        const total = (refreshCoinValue * balance.value) / balance.coin.startValue

        return acc + total
    }, 0)

    const sumaryProfit = Number((TotalBalance - TotalProfit).toFixed(3))

    const sumaryBalance = Number(TotalBalance.toFixed(2))

    const percenteges = {
        balance: 100 - (sumaryBalance * 100 / TotalBalance)
    }


    function addNewBalanceDate(data: BalanceProps) {
        setBalance(state => [...state, data])
    }

    return (
        <BalanceAndProfitContent.Provider value={{ addNewBalanceDate, balance, sumaryBalance, sumaryProfit, percenteges }}>
            {children}
        </BalanceAndProfitContent.Provider>
    )
}