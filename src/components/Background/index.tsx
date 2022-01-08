import { Container } from "./styles";
import thermometerSunImg from '../../assets/thermometerSun.svg'
import thermometerSnowImg from '../../assets/thermometerSnow.svg'
import background from '../../assets/background.svg'

export function Background() {
    return (
        <Container>
            <img src={thermometerSunImg} alt="" />
            <img src={thermometerSnowImg} alt="" />
            <img src={background} alt="" />
        </Container>
    );
}