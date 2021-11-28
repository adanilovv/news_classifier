import styled from "styled-components";
import {
  borderRadius,
  boxShadow,
  negColor,
  negGrad,
  neuColor,
  neuGrad,
  posColor,
  posGrad,
} from "../../fixtures/stylesSystem";

export const PassageItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  background-color: white;
  background-color: ${(props) =>
    (props.label === "neg" && negColor) ||
    (props.label === "pos" && posColor) ||
    (props.label === "neu" && neuColor)};
  background-image: ${(props) =>
    (props.label === "neg" && negGrad) ||
    (props.label === "pos" && posGrad) ||
    (props.label === "neu" && neuGrad)};
  padding: 25px;
  margin-top: 25px;
  border-radius: ${borderRadius};

  box-shadow: ${boxShadow};
`;

export const PassageText = styled.div``;

export const PassageLabel = styled.div`
  margin-left: 10px;
`;
