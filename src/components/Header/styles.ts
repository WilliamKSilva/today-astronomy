import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
`;

export const Content = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;

    @media (min-width: 1024px) {
        width: 70%;
    }

    div {
        display: flex;
        gap: 5px;

        img {
            width: 55px;

            @media (min-width: 768px) {
                width: 65px;
            }

            @media (min-width: 1024px) {
                width: 80px;
            }
            
        }
    
        h1 {
            font-size: 1rem;
            color: #b8b8ff;
            font-weight: 700;
            padding: 0.5rem;

            @media (min-width: 768px) {
                font-size: 1.2rem;
            }

            @media (min-width: 1080px) {
                font-size: 0.9rem;
            }
        }
    }

    a {
        display: flex;
        border: none;
        background-color: #b8b8ff;        
        padding: 0.4rem;
        border-radius: 8px;
        font-size: 1.1rem;
        transition: 0.2s;
        text-decoration: none;
        color: #FFFFFF;

        @media (min-width: 768px) {
            font-size: 1.5rem;
            padding: 0.5rem;
        }

        @media (min-width: 1024px) {
            font-size: 1rem;
        }
            
        @media (min-width: 1080px) {
            font-size: 0.9rem;
            padding: 0.3rem;
        }        

        &:hover {
            filter: brightness(0.4);            
        }
        
    }
`;