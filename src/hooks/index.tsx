import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface TemperatureProviderProps {
    children: ReactNode
}

interface TemperatureContextData {
    temperature: number;
    typeTemperature: string;
    temperatureConvert: TemperatureConvert[];
    handleSelectedTemperature: (typeTemperature: string) => void;
    onSetTemperature: (temperature: number) => void;

    temperatureConvertOne: number;
    temperatureConvertTwo: number;
    typeTemperatureConvertOne: string;
    typeTemperatureConvertTwo: string;
}

interface TemperatureConvert {
    temperatureConvert: number,
    typeTemperatureConvert: string
}

// interface TypeTemperatureProps {
//     typeTemperature: 'Celsius' | 'Fahrenheit' | 'Kelvin';
// }

const TemperatureContext = createContext<TemperatureContextData>({} as TemperatureContextData);

export function useTemperature() {
    const context = useContext(TemperatureContext);
    return context;
}

export function TemperatureProvider({ children }: TemperatureProviderProps) {
    const [temperature, setTemperature] = useState(0);
    const [typeTemperature, setTypeTemperature] = useState<string>('Celsius');
    const [temperatureConvert, setTemperatureConvert] = useState<TemperatureConvert[]>([])

    // Remover esse trecho
    const [temperatureConvertOne, setTemperatureConvertOne] = useState(0)
    const [temperatureConvertTwo, setTemperatureConvertTwo] = useState(0)
    const [typeTemperatureConvertOne, setTypeTemperatureConvertOne] = useState('')
    const [typeTemperatureConvertTwo, setTypeTemperatureConvertTwo] = useState('')

    useEffect(() => {
        setTypeTemperature(typeTemperature);
        onConvertTemperature(typeTemperature);
    }, [temperature]);

    function handleSelectedTemperature(typeTemperature: string) {
        setTypeTemperature(typeTemperature);
        onConvertTemperature(typeTemperature);
        // console.log(`type: ${typeTemperature} temperature: ${temperature}`)
    }

    function onConvertTemperature(type: string) {
        let celsius, fahrenheit, kelvin: number = 0;

        if (type === 'Celsius') {
            celsius = temperature;

            fahrenheit = celsius * 9 / 5 + 32;
            kelvin = celsius + 273.15;


            let newValue: TemperatureConvert;
            setTemperatureConvert([...temperatureConvert])
            console.log('temperature Convert: ', temperatureConvert)

            setTemperatureConvertOne(fahrenheit);
            setTypeTemperatureConvertOne('Fahrenheit');

            setTemperatureConvertTwo(kelvin);
            setTypeTemperatureConvertTwo('Kelvin');

            console.log(`celsius ${celsius} -> fahrenheit ${fahrenheit} kelvin ${kelvin}`)
        } else if (type === 'Fahrenheit') {
            fahrenheit = temperature;

            celsius = (fahrenheit - 32) * 5 / 9;
            kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

            setTemperatureConvertOne(celsius);
            setTypeTemperatureConvertOne('Celsius');

            setTemperatureConvertTwo(kelvin);
            setTypeTemperatureConvertTwo('Kelvin');


            console.log(`fahrenheit ${fahrenheit} -> celsius ${celsius} kelvin ${kelvin}`)
        } else {
            kelvin = temperature;

            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;

            setTemperatureConvertOne(celsius);
            setTypeTemperatureConvertOne('Celsius');

            setTemperatureConvertTwo(fahrenheit);
            setTypeTemperatureConvertTwo('Fahrenheit');

            console.log(`kelvin ${kelvin} -> celsius ${celsius} fahrenheit ${fahrenheit}`)
        }
    }

    function onSetTemperature(temperature: number) {
        setTemperature(temperature);
        //onConvertTemperature(typeTemperature);
    }

    return (
        <TemperatureContext.Provider value={
            {
                temperature,
                typeTemperature,
                temperatureConvert,
                handleSelectedTemperature,
                onSetTemperature,

                temperatureConvertOne,
                temperatureConvertTwo,
                typeTemperatureConvertOne,
                typeTemperatureConvertTwo,
            }
        }>
            {children}
        </TemperatureContext.Provider>
    );
}