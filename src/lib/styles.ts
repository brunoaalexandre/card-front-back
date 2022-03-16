import styled from "styled-components";

interface ContainerProps {
  width: string;
  height: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.42, 0, 0.54, 1.68);

  &:hover {
    transform: rotateY(180deg);
  }
`;

interface CardFrontContainerProps {
  background: string;
}

export const CardFrontContainer = styled.div<CardFrontContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: ${(props) => props.background};
`;

interface CardBackContainerProps {
  background: string;
}

export const CardBackContainer = styled.div<CardBackContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: ${(props) => props.background};
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
