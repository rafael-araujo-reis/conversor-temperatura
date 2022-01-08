import { darken } from 'polished'
import styled from 'styled-components'

interface RadioBoxProps {
    isActive: boolean;
}
export const Container = styled.section`
    display: flex;
    flex-direction: column;

    max-width: 30rem;
    margin: 0 auto;

    p{
        font-size: 1rem;
        text-align: left;
        margin-bottom: 1rem;
    }
    
    input{
        border: none;
        border-radius: 0.25rem;
        padding: 1rem 2rem;
        margin-top: 3rem;

        color: var(--text-title);
        font-size: 1.5rem;
        text-align: center;
        font-weight: 600;

        background-color: var(--shape);
        
        &::placeholder{
            color: var(--text-title);
            font-weight: 400;
            font-size: 1rem;
        }
    }
    @media (max-width: 420px) {
        margin: 0 1rem;
    }
`

export const Context = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`

export const RadioBox = styled.button<RadioBoxProps>`
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.25rem;

    font-size: 1rem;

    color: var(--text-body);
    background: ${(props) => props.isActive ?
        darken(0.15, '#03749B') :
        '#03749B'
    };
    transition: background-color 0.3s;

    &:hover{
        background-color: ${darken(0.15, '#03749B')};
    }
`

