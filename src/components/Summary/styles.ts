import styled from 'styled-components';

export const Container = styled.section`
    max-width: 50rem;

    margin: 0 auto;
    margin-top:3rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
    `

export const CardContext = styled.div`
    background-color: var(--light-blue);
    color: var(--text-body);
    padding: 1rem;
    font-weight: 400;
    
    border-radius: 0.25rem;
    
    @media (max-width: 720px) {
        margin: 0 1rem;
    }
    
    h2{
        font-size: 3.25rem;
        font-weight: 700;
    }
    
    p{
        font-size: 2rem;
        color: var(--text-title)
    }
`