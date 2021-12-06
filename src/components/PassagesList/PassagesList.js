import {ArticleSummary, PassagesListWrapper} from "./PassagesList.styles";
import {PassageItem} from "../PassageItem/PassageItem";
import {usePostArticleQuery} from "../../store/services/newsClassifier";
import {nanoid} from "@reduxjs/toolkit";

export const PassagesList = ({text, tag}) => {
    const {data, error, isLoading, isFetching} = usePostArticleQuery({
        text,
        tag,
        context_size: 1,
    });

    console.log("RTK", data, error, isLoading);

    if (isFetching) return <div>Обработка...</div>;

    const negPassages = data && data.neg_passages.map((passage) => ({
        passage,
        label: "neg",
    }));
    const posPassages = data && data.pos_passages.map((passage) => ({
        passage,
        label: "pos",
    }));
    const neuPassages = data && data.neu_passages.map((passage) => ({
        passage,
        label: "neu",
    }));

    const passages = data && negPassages.concat(posPassages).concat(neuPassages);
    console.log()
    if (data?.text) {
        return (
            <div>
                <ArticleSummary label={data.article_label}>
                    <div>
                        Оценка вашей статьи по тегу '{data.tag}': {data.article_label}
                    </div>
                    <div>Негативных упоминаний: {data.n_neg}</div>
                    <div>Позитивных упоминаний: {data.n_pos}</div>
                    <div>Нейтральных упоминаний: {data.n_neu}</div>
                </ArticleSummary>
                <PassagesListWrapper>
                    <PassageItem text={"Фрагмент статьи"} label={"Оценка"} />
                    {passages.map(({passage, label}) => (
                        <PassageItem key={nanoid()} text={passage} label={label}
                                     operatorLabels={['pos', 'neu', 'neg'].filter(l => l !== label)}/>
                    ))}
                </PassagesListWrapper>
            </div>
        );
    }

    return <div></div>;
};
