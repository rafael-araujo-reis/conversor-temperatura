import styled from 'styled-components'

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
    `

export const RadioBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    button{
        padding: 1rem 2rem;
        border: none;
        border-radius: 0.25rem;

        font-size: 1rem;

        color: var(--text-body);
        background-color: var(--dark-blue);
        transition: filter 0.3s;

        &:hover{
          filter: brightness(0.8);
        }
    }
`

