import { ReactNode } from "react";
import { CardBackContainer, CardFrontContainer, Container } from "./styles";

interface CardProps {
  children: ReactNode;
  width: string;
  height: string;
}

interface CardFrontProps {
  children: ReactNode;
  background: string;
}

interface CardBackProps {
  children: ReactNode;
  background: string;
}

function CardContainer({ children, width, height }: CardProps) {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
}

function CardFront({ children, background }: CardFrontProps) {
  return (
    <CardFrontContainer background={background}>{children}</CardFrontContainer>
  );
}

function CardBack({ children, background }: CardBackProps) {
  return (
    <CardBackContainer background={background}>{children}</CardBackContainer>
  );
}

export { CardContainer, CardFront, CardBack };
