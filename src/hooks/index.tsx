import { createContext, ReactNode, useContext } from "react";

interface TemperatureProviderProps {
    children: ReactNode
}

const TemperatureContext = createContext({});

export function useTermperature() {
    const context = useContext(TemperatureContext);
    return context;
}

export function TemperatureProvider({ children }: TemperatureProviderProps) {
    return (
        <TemperatureContext.Provider value={{}}>
            {children}
        </TemperatureContext.Provider>
    );
}