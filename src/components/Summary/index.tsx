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
            {
                temperatureConvert.map(temperature => {
                    <CardContext>
                        <h2>{temperature.temperatureConvert} </h2>
                        <p>{temperature.typeTemperatureConvert}</p>
                    </CardContext>
                })
            }
            {/* Cards temporarios */}
            <CardContext>
                <h2>{temperatureConvertOne.toFixed(2)}</h2>
                <p>{typeTemperatureConvertOne}</p>
            </CardContext>
            <CardContext>
                <h2>{temperatureConvertTwo.toFixed(2)}</h2>
                <p>{typeTemperatureConvertTwo}</p>
            </CardContext>
        </Container>
    );
}