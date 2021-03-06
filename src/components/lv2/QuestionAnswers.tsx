import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import { useDispatch } from 'react-redux';
import { correctIncrement1 } from '../../actions';
import datas from '../../dataset';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';
import QuestionAnswer from '../lv1/QuestionAnswer';

type Props = {
  nextQuestionNumber: () => void;
  questionNumber: number;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
};

type quizData = {
  answers: string[];
  correct: string;
  explain: String[];
  question: string;
};

const QuestionAnswers: React.VFC<Props> = ({
  nextQuestionNumber,
  questionNumber,
  selectedCategoryTitle,
  selectedQuizTitle,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnsName, setSelectedAnsName] = useState('answer');
  const [selectAnsIndex, setSelectAnsIndex] = useState(null);
  const [modalTitle, setModalTitle] = useState('title');
  const dispatch = useDispatch();

  //selectAnswerのstateが変わったら呼び出される（後、初回のrender時も）
  useEffect(() => {
    const index = datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].answers.indexOf(
      selectedAnsName
    );
    setSelectAnsIndex(index);
    getModalTitle();
  }, [selectedAnsName]);

  //引数getData←data←datas[title][questionNumber].answers.map
  const getSelectAnswer = (getQuizData: string) => {
    setSelectedAnsName(getQuizData);
  };

  const getQuizData = (): quizData => {
    console.log(datas[selectedCategoryTitle][selectedQuizTitle][questionNumber]);
    return datas[selectedCategoryTitle][selectedQuizTitle][questionNumber];
  };

  //selectedAnsName(state)が変わったら呼び出される(useEffect)
  //正誤判定
  const getModalTitle = (): void => {
    if (selectedAnsName === getQuizData().correct) {
      setModalTitle('正解！');
      dispatch(correctIncrement1());
    } else {
      setModalTitle('不正解！');
    }
  };

  return (
    <>
      <QuestionAnswersStyle>
        {datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].answers.map(
          (data: string, i: number) => (
            <QuestionAnswer
              key={data.toString()}
              data={data}
              setModalOpen={setModalOpen}
              setSelectedAnsName={getSelectAnswer}
              i={i}
            />
          )
        )}
      </QuestionAnswersStyle>

      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectAnsIndex={selectAnsIndex}
        modalTitle={modalTitle}
        getQuizData={getQuizData}
        nextQuestionNumber={nextQuestionNumber}
        questionNumber={questionNumber}
      />
    </>
  );
};
export default QuestionAnswers;

const QuestionAnswersStyle = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  //スマホ
  ${customMedia.lessThan('mobile')`
 /* screen width is less than 599px (tablet) */
 width: 100%;

`} //タブレット
    ${customMedia.between('mobile', 'tablet')`
 /* screen width is between 599px (tablet) and 1024px (desktop) */
`} //PC
    ${customMedia.greaterThan('tablet')`
 /* screen width is greater than 1024px (tablet) */
`}
`;
