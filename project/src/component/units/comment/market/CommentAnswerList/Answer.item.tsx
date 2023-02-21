import { useState } from "react";
import { getDate } from "../../../../../commons/library/utils";
import { timeForToday } from "../../../../../commons/library/utils2";
import CommentAnswerWriter from "../CommentAnswerWriter";
import * as S from "./index.style";

export default function AnswerItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <S.InnerWrapper key={props.el._id}>
      {!isEdit && (
        <S.AnswerWrap key={props.el._id}>
          <S.MainWrap>
            <S.TitleWrap>
              <S.Title>답변</S.Title>
            </S.TitleWrap>
            <S.Date>{getDate(props.el.createdAt)}</S.Date>
            <S.Contents>{props.el.contents}</S.Contents>
          </S.MainWrap>
        </S.AnswerWrap>
      )}
      {isEdit && (
        <CommentAnswerWriter
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </S.InnerWrapper>
  );
}
