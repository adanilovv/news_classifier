import {
  PassageItemWrapper,
  PassageLabel,
  PassageText,
} from "./PassageItem.styles";

export const PassageItem = (props) => {
  return (
    <PassageItemWrapper label={props.label}>
      <PassageText>{props.text}</PassageText>
      <PassageLabel>{props.label}</PassageLabel>
    </PassageItemWrapper>
  );
};
