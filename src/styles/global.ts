import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: linear-gradient(178.87deg, #6ADBFF 0.97%, rgba(255, 255, 255, 0) 133.36%);
        
        --text-title: #035875;
        --text-body: #FFFFFF;
        
        --primary: #03749B;
        --secondary: #009BD0;
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
        background: var(--background) no-repeat;
        min-height: 100vh;
        --webkit-font-smoothing: antialiased;
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