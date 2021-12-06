import styled from "styled-components";
import { borderRadius, boxShadow } from "../../fixtures/stylesSystem";

export const NewsInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: 90px;
  width: 90%;
  max-width: 500px;
  height: 400px;

  margin-bottom: 40px;
`;

export const NewsTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding-top: 15px;
  padding-right: 15%;
  padding-left: 15px;
  border: 2px solid #9599e2;
  border-radius: ${borderRadius};

  :focus {
    border: 2px solid gray;
  }
`;

export const TagBar = styled.input`
  width: 70%;
  border: 2px solid #9599e2;
  border-radius: ${borderRadius};
  padding: 3px 10px;

  :focus {
    border: 2px solid gray;
  }
`;

export const SubmitButton = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border-radius: ${borderRadius};
  border: 2px solid #9599e2;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  overflow: hidden;
  transition: all 0.3s ease;

  :hover {
    background: #9599e2;
    color: #fff;
  }

  :active {
    background: gray;
    border-color: gray;
  }
`;
