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

interface BalanceContextProps {

    addNewBalanceDate: (data: BalanceProps) => void;
    balance: BalanceProps[]
    sumaryBalance: number;
    sumaryProfit: number;
}

interface BalaceAndProfitProviderProps {
    children: ReactNode;
}



export const BalanceAndProfitContent = createContext({} as BalanceContextProps)



export const BalaceAndProfitProvider = ({ children }: BalaceAndProfitProviderProps) => {

    const { data: assets } = useAssets()

    const [balance, setBalance] = useState<BalanceProps[]>([])

    const sumaryBalance = balance.reduce((acc, balance) => {
        return acc + balance.value
    }, 0)

    const sumaryProfit = balance.reduce((acc, balance) => {

        const price = assets!.find((asset) => asset.assetId === balance.coin.id)!.price

        if (price) {
            const value = (price * balance.value) / balance.coin.startValue

            const profit = (sumaryBalance - value).toFixed(2)

            return Number(profit)
        }
        return acc
    }, 0)


    function addNewBalanceDate(data: BalanceProps) {
        setBalance(state => [...state, data])
    }

    return (
        <BalanceAndProfitContent.Provider value={{ addNewBalanceDate, balance, sumaryBalance, sumaryProfit }}>
            {children}
        </BalanceAndProfitContent.Provider>
    )
}