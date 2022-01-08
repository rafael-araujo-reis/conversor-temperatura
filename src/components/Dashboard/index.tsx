import { useState } from "react";
import { Container, RadioBox } from "./styles";

export function Dashboard() {
    const [temperature, setTemperature] = useState(0);
    const [typeTemperature, setTypeTemperature] = useState('Celsius')

    function handleSelectedTemperature(typeTemperature: string) {
        setTypeTemperature(typeTemperature);
        onConvertTemperature(typeTemperature);
        console.log(`type: ${typeTemperature} temperature: ${temperature}`)
    }

    function onSetTemperature(temperature: number) {
        setTemperature(temperature);
        onConvertTemperature(typeTemperature);
    }

    function onConvertTemperature(type: string) {
        let celsius, fahrenheit, kelvin = 0;

        if (type === 'Celsius') {
            celsius = temperature;

            fahrenheit = celsius * 9 / 5 + 32;
            kelvin = celsius + 273.15;

            console.log(`celsius ${celsius} -> fahrenheit ${fahrenheit} kelvin ${kelvin}`)
        } else if (type === 'Fahrenheit') {
            fahrenheit = temperature;

            celsius = (fahrenheit - 32) * 5 / 9;
            kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

            console.log(`fahrenheit ${fahrenheit} -> celsius ${celsius} kelvin ${kelvin}`)
        } else {
            kelvin = temperature;

            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;

            console.log(`kelvin ${kelvin} -> celsius ${celsius} fahrenheit ${fahrenheit}`)
        }
    }

    return (
        <Container>
            <p>Qual a temperatura deseja converter?</p>
            <RadioBox>
                <button type="button" onClick={
                    () => handleSelectedTemperature('Celsius')
                }>Celsius</button>
                <button type="button" onClick={
                    () => handleSelectedTemperature('Fahrenheit')
                }>Fahrenheit</button>
                <button type="button" onClick={
                    () => handleSelectedTemperature('Kelvin')
                }>Kelvin</button>
            </RadioBox>
            <input
                type="number"

                placeholder={`Quantos ${typeTemperature} deseja converter?`}
                onChange={(event) => onSetTemperature(Number(event.target.value))}
            />
        </Container>
    );
}