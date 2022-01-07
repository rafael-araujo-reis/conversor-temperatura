import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: linear-gradient(161.37deg, #6ADBFF 12.61%, rgba(254, 222, 222, 0.59) 90.42%);;
        
        --text-title: #035875;
        --text-body: #FFFFFF;
        
        --dark-blue: #03749B;
        --light-blue: #009BD0;
        --shape: #EFEFEF;
        
        --white: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%
        }
        @media (max-width: 720px) {
            font-size: 83.5%
        }
    }

    body{
        --webkit-font-smoothing: antialiased;

        background: var(--background) no-repeat;
        min-height: 100vh;
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    body,input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text-title)
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
    }

    button{ 
        cursor: pointer;
    }
    
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
     }
`