import styled from "styled-components";

// Container that keeps the two cards and makes the rotation effect showing the back-face and hiding the front-face.
export const Container = styled.div`
  width: 8.125rem;
  height: 10rem;

  position: relative;
  transform-style: preserve-3d;

  transition: transform 0.6s cubic-bezier(0.42, 0, 0.54, 1.68);

  &:hover {
    transform: rotateY(180deg);
  }
`;

// Front card that will keep the initial information
export const CardFront = styled.div`
  width: 8.125rem;
  height: 10rem;
  position: absolute;
  background: #ff0000;
`;

// Back card that will keep most of the information.
export const CardBack = styled.div`
  width: 8.125rem;
  height: 10rem;
  position: absolute;
  background: #00ff00;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
