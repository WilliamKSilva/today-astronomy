import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;    
    background-color: #272640;

    a {
        padding-top: 1%;
        display: flex;
        align-self: center;
        justify-content: center;
        font-size: 1rem;
        color: #b8b8ff;                
    }    
    
`;


export const Main = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    padding: 2rem;       
    margin-top: 20%;    
    border-radius: 10px;
    background-color: #000000;
    margin-left: 1.3rem;
    
    @media (min-width: 320px) {
        margin-left: 1rem;
    }

    @media (min-width: 375px) {
        margin-left: 1.2rem;
    }

    @media (min-width: 768px) {
        margin-left: 2rem;
    }

    @media (min-width: 1024px) {
        margin-left: 1rem;
    }

    @media (min-width: 1080px) {
        margin-left: 8rem;
        margin-top: 10%;
        width: 80%;
    }
    
    

    h2 {
        font-size: 1.2rem;
        padding-bottom: 2rem;
        color: #b8b8ff;
        font-weight: 700;

        @media (min-width: 768px) {
            font-size: 2rem;
        }
    }    

    img {
        width: 320px;
        border-radius: 20px;
        
        @media (min-width: 320px) {
            width: 200px;
        }

        @media (min-width: 768px) {
            width: 600px;
        }

        @media (min-width: 1080px) {
            width: 1000px;         
        }
    }

    strong {
        font-size: 1rem;
        color: #FFFFFF;
        padding-top: 8%;
        inline-size: 100%;

        @media (min-width: 768px) {
            font-size: 1.3rem;
        }

        @media (min-width: 1080px) {
            font-size: 0.8rem;         
        }
    }

    footer {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        font-weight: 700;
        padding-top: 2rem;
            strong {
                font-size: 0.9rem;
                color: #b8b8ff;

                @media (min-width: 768px) {
                    font-size: 1.1rem;
                }

                @media (min-width: 1080px) {
                    font-size: 1rem;
                }
            }
            
    }
`;

