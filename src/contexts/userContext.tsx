import { createContext, ReactNode, useState } from "react";

interface userProps {

    email: string;
    family_name: string;
    given_name: string;
    id: string;
    locale: string;
    name: string;
    picture: string;

}

interface userContextProps {
    user: userProps;
    handleSetUser: (user: userProps) => void;
}

interface UserContextProvider {
    children: ReactNode;
}

export const UserContext = createContext({} as userContextProps)

export const UserContextProvider = ({ children }: UserContextProvider) => {

    const [user, setUser] = useState({} as userProps)

    const handleSetUser = (user: userProps) => {
        setUser(user)
    }


    return (
        <UserContext.Provider value={{ handleSetUser, user }}>
            {children}
        </UserContext.Provider>
    )
}




