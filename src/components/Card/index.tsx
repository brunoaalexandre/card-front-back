import { CardBack, CardFront, Container } from "./styles";

export function Card() {
    return(
        <Container>
            <CardFront>
              <h1>FRONT</h1>
            </CardFront>
            <CardBack>
              <h1>BACK</h1>
            </CardBack>
        </Container>
    );
}
