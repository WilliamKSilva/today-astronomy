import { Container } from "./styles";
import ReactLoading from 'react-loading'

export function Loading() {
    return (
        <Container>
            <ReactLoading color="#b8b8ff" type="spinningBubbles" width={200}/>
        </Container>
    )
}