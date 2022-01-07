import { Container, RadioBox } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <p>Qual a temperatura deseja converter?</p>
            <RadioBox>
                <button type="button">Fahrenheit</button>
                <button type="button">Celsius</button>
                <button type="button">Kelvin</button>
            </RadioBox>
            <input
                type="number"
                placeholder="Quantos Celsius deseja converter?"
            // onChange={}
            />
        </Container>
    );
}