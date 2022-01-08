import { useTemperature } from "../../hooks";
import { CardContext, Container } from "./styles";

export function Summary() {
    const {
        temperatureConvert,

        temperatureConvertOne,
        typeTemperatureConvertOne,
        temperatureConvertTwo,
        typeTemperatureConvertTwo,
    } = useTemperature();
    return (
        <Container>
            {temperatureConvert.map(temperature => {
                <CardContext>
                    <h2>{temperature.temperatureConvert}</h2>
                    <p>{temperature.typeTemperatureConvert}</p>
                </CardContext>
            })}
            <CardContext>
                <h2>{temperatureConvertOne}</h2>
                <p>{typeTemperatureConvertOne}</p>
            </CardContext>
            <CardContext>
                <h2>{temperatureConvertTwo}</h2>
                <p>{typeTemperatureConvertTwo}</p>
            </CardContext>
        </Container>
    );
}