import { createContext } from 'react';
import type { PropsWithChildren } from 'react';
import useApp from 'hooks/useApp';

//@ts-ignore
export const AppContext = createContext<ReturnType<typeof useApp>>({});

export const Provider = ({ children }: PropsWithChildren) => {
    const contextValue = useApp();
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
};

export default Provider;
