import {
    InterfaceWrapper, OperatorButton,
    PassageItemWrapper,
    PassageLabel,
    PassageText,
} from "./PassageItem.styles";
import {OperatorInterface} from "../OperatorInterface/OperatorInterface";
import {useState} from "react";
import axios from "axios";

export const PassageItem = (props) => {
    const [isDisabled, setIsDisabled] = useState(false)

    const handleOperatorSubmit = (text, label) => {
        console.log('sending post..', text, label)
      axios.post('http://bonch-ikt.ru:19680/data', {
          text,
          label
      }).catch(function (e) {
          console.log('postError', e)
      })
        setIsDisabled(true)
    }

    if (props.text === 'Фрагмент статьи') {
        return (<PassageItemWrapper label={props.label}>
            <PassageText>{props.text}</PassageText>
            <PassageLabel>{props.label}</PassageLabel>
        </PassageItemWrapper>)
    }
  return (
    <InterfaceWrapper>
        <PassageItemWrapper label={props.label}>
            <PassageText>{props.text}</PassageText>
            <PassageLabel>{props.label}</PassageLabel>
        </PassageItemWrapper>
        <OperatorButton disabled={isDisabled} onClick={() => handleOperatorSubmit(props.text, props.operatorLabels[0])} label={props.operatorLabels[0]}>
            {props.operatorLabels[0]}
        </OperatorButton>
        <OperatorButton disabled={isDisabled} onClick={() => handleOperatorSubmit(props.text, props.operatorLabels[1])} label={props.operatorLabels[1]}>
            {props.operatorLabels[1]}
        </OperatorButton>
    </InterfaceWrapper>
  );
};
