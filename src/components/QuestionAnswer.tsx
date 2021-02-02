import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  data: any;
  isOpen: any;
  setIsOpen: any;
  setSelectAnswer: Function;
}

const QuestionAnswer: React.FC<Props> = ({
  data,
  isOpen,
  setIsOpen,
  setSelectAnswer,
}) => {
  const [blue, setBlue] = useState(false);

  return (
    <div>
      <ButtonStyle
        onClick={() => {
          setBlue(!blue);
          setIsOpen(!isOpen);
          setSelectAnswer(data);
        }}
        blue={blue}
      >
        {data}
      </ButtonStyle>
    </div>
  );
};

export default QuestionAnswer;

type Color = {
  blue?: boolean;
};

const ButtonStyle = styled.button<Color>`
  width: 100%;
  padding: 30px 0;
  margin-bottom: 5px;
  background-color: white;
  color: #1976d2;
  border: 0.7px solid rgba(82, 83, 85, 0.3);
  cursor: pointer;
  //stateのblue(引数のblue)がtrueだったら
  ${({ blue }) =>
    blue
      ? css`
          background-color: #1976d2;
          color: white;
        `
      : ''}
`;