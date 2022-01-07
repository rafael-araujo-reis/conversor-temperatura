export function Dashboard() {
    return (
        <>
            <p>Qual a temperatura deseja converter?</p>
            <button type="button">Fahrenheit</button>
            <button type="button">Celsius</button>
            <button type="button">Kelvin</button>
            <input
                type="number"
                placeholder="Quantos Celsius deseja converter?"
            // onChange={}
            />
        </>
    );
}