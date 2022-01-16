import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    
    @media(max-width: 480px){       
      font-size: 50%;      
    }
    @media(max-width: 998px){       
      font-size: 95%;
    }
  }
  body {
    font-size: 1.6rem;
    background-color: #272640;
    -webkit-font-smoothing: antialised;     
    
  }
  body, input, textarea, button {
    font-family: 'Mukta', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }  
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  ::-webkit-scrollbar {
    height: 12px;
    width: 10px;
    background: #000;
  }
  ::-webkit-scrollbar-thumb {
      background: var(--text);
      -webkit-border-radius: 1rem;
      -webkit-box-shadow: 0px 1px 2px var(--border);
  }
  ::-webkit-scrollbar-corner {
      background: var(---background-strong);
  }
`;