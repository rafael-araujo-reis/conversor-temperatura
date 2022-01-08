import { useEffect, useState } from "react";
import { useTemperature } from "../../hooks";
import { Container, Context, RadioBox } from "./styles";

export function Dashboard() {

    const {
        typeTemperature,
        handleSelectedTemperature,
        onSetTemperature
    } = useTemperature();

    const [type, setType] = useState('Celsius')

    useEffect(() => {
        handleSelectedTemperature(type)
    }, [type])

    return (
        <Container>
            <p>Qual a temperatura deseja converter?</p>
            <Context>
                <RadioBox
                    type="button"
                    isActive={type === 'Celsius'}
                    onClick={
                        () => setType('Celsius')
                    }>Celsius
                </RadioBox>
                <RadioBox
                    type="button"
                    isActive={type === 'Fahrenheit'}
                    onClick={
                        () => setType('Fahrenheit')
                    }>Fahrenheit
                </RadioBox>
                <RadioBox
                    type="button"
                    isActive={type === 'Kelvin'}
                    onClick={
                        () => setType('Kelvin')
                    }>Kelvin
                </RadioBox>
            </Context>
            <input
                type="number"

                placeholder={`Quantos ${typeTemperature} deseja converter?`}
                onChange={(event) => onSetTemperature(Number(event.target.value))}
            />
        </Container>
    );
}