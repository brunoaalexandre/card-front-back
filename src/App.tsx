import { CardContainer, CardFront, CardBack } from "./lib";

export function App() {
  return (
    <CardContainer width="130px" height="160px">
      <CardFront background="red">
        <h1>100% de tudo</h1>
      </CardFront>
      <CardBack background="green">
        <h1>Back</h1>
      </CardBack>
    </CardContainer>
  );
}
