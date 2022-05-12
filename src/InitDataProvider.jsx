import React, {createContext} from 'react';
import { useTelegramWebApp } from 'react-telegram-webapp';

export const InitDataContext = createContext();

const InitDataProvider = ({ children }) => {
    const webApp = useTelegramWebApp()

    return (
        <InitDataContext.Provider value={{ initData: webApp.initData, test: 'ничего', initDataUnsafe: webApp.initDataUnsafe }}>{children}</InitDataContext.Provider>
    );
}
 
export default InitDataProvider;