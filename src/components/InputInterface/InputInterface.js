import {
  NewsInputWrapper,
  NewsTextArea,
  SubmitButton,
  TagBar,
} from "./InputInterface.styles";
import { useState } from "react";
import { defaultTag, defaultText } from "../../fixtures/defaultInputs";

export const InputInterface = ({ onHandleSubmitButton }) => {
  const [newsTextAreaInput, setNewsTextAreaInput] = useState(defaultText);
  const [tagBarInput, setTagBarInput] = useState(defaultTag);

  const handleChangeNewsTextArea = (e) => {
    setNewsTextAreaInput(e.target.value);
  };
  const handleChangeTagBar = (e) => {
    setTagBarInput(e.target.value);
  };

  const handleSubmit = () => {
    onHandleSubmitButton(newsTextAreaInput, tagBarInput);
    setNewsTextAreaInput("");
    setTagBarInput("");
  };

  return (
    <NewsInputWrapper>
      <NewsTextArea
        onChange={handleChangeNewsTextArea}
        placeholder="Вставьте статью..."
        value={newsTextAreaInput}
      />
      <TagBar
        type="text"
        placeholder="Введите тэг..."
        value={tagBarInput}
        onChange={handleChangeTagBar}
      />
      <SubmitButton onClick={handleSubmit}>Отправить</SubmitButton>
    </NewsInputWrapper>
  );
};
