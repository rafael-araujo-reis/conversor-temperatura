import { useTemperature } from "../../hooks";
import { Container, RadioBox } from "./styles";

export function Dashboard() {

    const {
        typeTemperature,
        handleSelectedTemperature,
        onSetTemperature
    } = useTemperature();

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