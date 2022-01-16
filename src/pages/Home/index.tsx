import { Container, Main } from "./styles";
import { useImages } from "./useImages";

export function Home() {
    const { imageData, isDataFetching } = useImages();

    return (
        <Container>            
            <Main>           
                <h2>{imageData.title}</h2>
                <img src={imageData.url} alt=""/>
                <strong>{imageData.explanation}</strong>
                <footer>
                    <strong>Photo registred at {imageData.date}</strong>
                </footer>            
            </Main>
            <a href="https://www.flaticon.com/free-icons/universe">Universe icons created by Freepik - Flaticon</a>
        </Container>
    )
}