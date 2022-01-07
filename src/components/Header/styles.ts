import styled from 'styled-components'

export const Container = styled.header`
    padding: 5rem 2rem 3rem;

    .sunshine{
        background: radial-gradient(50% 50% at 50% 50%, #F4BF00 0%, rgba(196, 196, 196, 0) 100%);
        width: 500px;
        height: 500px;

        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);

        border-radius: 500px;
    }
    h1{ 
        font-size: 3rem;
        margin: 0 auto;
        text-align: center;
    }
`