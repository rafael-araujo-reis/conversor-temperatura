import { CardContext, Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <CardContext>
                <h2>50.7º</h2>
                <p>Fahrenheit</p>
            </CardContext>
            <CardContext>
                <h2>120.7º</h2>
                <p>Celsius</p>
            </CardContext>
        </Container>
    );
}