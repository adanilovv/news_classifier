import {InputInterface} from "../InputInterface/InputInterface";
import {PassagesList} from "../PassagesList/PassagesList";
import {NewsClassifierWrapper, Title} from "./NewsClassifier.styles";
import {useState} from "react";

export const NewsClassifier = () => {
    console.log("NGROK: ", process.env.REACT_APP_NGROK_URL)

    const [firstSubmit, setFirstSubmit] = useState(false)
    const [text, setText] = useState("");
    const [tag, setTag] = useState("");

    const onHandleSubmitButton = (text, tag) => {
        console.log(text);
        setText(text);
        setTag(tag);
        setFirstSubmit(true)
    };

    return (
        <NewsClassifierWrapper>
            <Title>
                <div className="title">Классификатор новостей</div>
            </Title>
            <InputInterface onHandleSubmitButton={onHandleSubmitButton}/>
            {firstSubmit && <PassagesList text={text} tag={tag}/>}
        </NewsClassifierWrapper>
    );
};
