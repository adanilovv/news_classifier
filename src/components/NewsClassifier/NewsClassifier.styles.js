import styled from "styled-components";
import { neuColor, neuGrad } from "../../fixtures/stylesSystem";

export const NewsClassifierWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  background-color: ${neuColor};
  background-image: ${neuGrad};
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    color: white;
    width: 90%;
    max-width: 500px;
  }
`;
