import { FormEvent, useState } from "react";
import { Container, RadioBox } from "./styles";




export function Dashboard() {
    const [temperature, setTemperature] = useState(0);
    const [typeTemperature, setTypeTemperature] = useState('Celsius')

    function handleSelectedTemperature(typeTemperature: string) {
        setTypeTemperature(typeTemperature);
        onConvertTemperature();
    }

    function onSetTemperature(temperature: number) {
        setTemperature(temperature);
        onConvertTemperature();
    }

    function onConvertTemperature() {
        console.log('temperature: ', temperature, 'type: ', typeTemperature)
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