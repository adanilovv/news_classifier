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

export const PassagesListWrapper = styled.div``;

export const ArticleSummary = styled.div`
  max-width: 500px;
  box-sizing: border-box;
  padding: 25px;
  border-radius: ${borderRadius};

  background-color: ${(props) =>
    (props.label === "neg" && negColor) ||
    (props.label === "pos" && posColor) ||
    (props.label === "neu" && neuColor)};
  background-image: ${(props) =>
    (props.label === "neg" && negGrad) ||
    (props.label === "pos" && posGrad) ||
    (props.label === "neu" && neuGrad)};

  box-shadow: ${boxShadow};
`;
