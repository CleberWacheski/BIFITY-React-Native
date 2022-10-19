import { createContext, ReactNode } from "react";

interface BalaceAndProfitProviderProps {
    children: ReactNode;
}

export const BalanceAndProfitContent = createContext({})


export const BalaceAndProfitProvider = ({ children }: BalaceAndProfitProviderProps) => {

    

    return (
        <BalanceAndProfitContent.Provider value={{}}>
            {children}
        </BalanceAndProfitContent.Provider>
    )
}