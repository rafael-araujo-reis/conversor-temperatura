import { Container } from "./styles";
import thermometerSunImg from '../../assets/thermometerSun.svg'
import thermometerSnowImg from '../../assets/thermometerSnow.svg'

export function Background() {
    return (
        <Container>
            <img src={thermometerSunImg} alt="" />
            <img src={thermometerSnowImg} alt="" />
        </Container>
    );
}