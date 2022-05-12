import React, {createContext} from 'react';
import { useTelegramWebApp } from 'react-telegram-webapp';

export const InitDataContext = createContext();

const InitDataProvider = ({ children, initialValue }) => {
    const webApp = useTelegramWebApp()

    return (
        <InitDataContext.Provider value={{ initData: initialValue }}>{children}</InitDataContext.Provider>
    );
}
 
export default InitDataProvider;