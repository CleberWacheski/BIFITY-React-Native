import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { assetsProps } from "../hooks/useCoinAPI";
import { UserContext } from "./userContext";


interface BalanceProps {
    coin: {
        name: string;
        startValue: number;
        id: string;
    },
    value: number;
    date: Date;
    id: string;
}

interface SummaryProps {
    profit: number;
    balance: number;
    balancePercentege: number;
}

interface UserStorageProps {
    summary: SummaryProps;
    balance: BalanceProps[];
}



interface BalanceContextProps {

    addNewBalanceDate: (data: BalanceProps) => void;
    balance: BalanceProps[]
    summary: SummaryProps;
    getBalanceData: (assets: assetsProps[]) => void;
    removeItemInBalance: (id: string) => void;

}

interface BalaceAndProfitProviderProps {
    children: ReactNode;
}



export const BalanceAndProfitContent = createContext({} as BalanceContextProps)



export const BalaceAndProfitProvider = ({ children }: BalaceAndProfitProviderProps) => {

    const { user } = useContext(UserContext)
    const { email } = user

    const KEY = `@${email}:BITIFY`

    useEffect(() => {
        const getData = async () => {

            try {
                const data = await AsyncStorage.getItem(KEY)

                if (data !== null) {
                    const { balance, summary } = JSON.parse(data) as UserStorageProps

                    setBalance(balance)
                    setSummary(summary)

                }
            } catch (e) {
                console.log(`ERROR : ${e}`)
            }
        }

        getData()

    }, [user])



    const [balance, setBalance] = useState<BalanceProps[]>([])
    const [summary, setSummary] = useState({
        profit: 0,
        balance: 0,
        balancePercentege: 0,
    })

    function addNewBalanceDate(data: BalanceProps) {
        setBalance(state => [...state, data])
    }

    function removeItemInBalance(id: string) {
        const newBalance = balance.filter((balance) => balance.id != id)
        setBalance(newBalance)

        if (newBalance.length === 0) {
            setSummary({
                profit: 0,
                balance: 0,
                balancePercentege: 0,
            })
        }
    }

    function getBalanceData(assets: assetsProps[]) {

        if (balance.length > 0) {

            const TotalBalance = balance.reduce((acc, balance) => {
                return acc + balance.value
            }, 0)

            const TotalProfit = balance.reduce((acc, balance) => {

                const refreshCoinValue = assets!.find((asset) => asset.assetId === balance.coin.id)!.price

                const total = (refreshCoinValue * balance.value) / balance.coin.startValue

                return acc + total
            }, 0).toFixed(4)


            const summaryBalance = Number(TotalProfit)
            const summaryProfit = Number((Number(TotalProfit) - TotalBalance).toFixed(4))

            const balancePercentege = Number((100 - (TotalBalance * 100 / summaryBalance)).toFixed(4))


            setSummary({
                profit: summaryProfit,
                balance: summaryBalance,
                balancePercentege,
            })
        }
    }




    useEffect(() => {

        const storeData = async (data: any) => {
            try {
                await AsyncStorage.setItem(KEY, data)
            } catch (e) {
                console.log(`ERROR : ${e}`)
            }
        }

        if (summary.balance != 0) {

            const data = {
                summary: summary,
                balance: balance,
            }

            storeData(JSON.stringify(data))
        }

    }, [summary])


    return (
        <BalanceAndProfitContent.Provider value={{ addNewBalanceDate, balance, summary, getBalanceData, removeItemInBalance }}>
            {children}
        </BalanceAndProfitContent.Provider>
    )
}



