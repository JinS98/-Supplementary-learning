import * as S from "./BoardCommentList.style";
import BoardCommentWrite from "../BoardCommentWrite/MarketCommentWrite.container";
import { useEffect, useState } from "react";
import { IBoardCommentsListUI } from "./BoardCommentList.types";
import CommentAnswerWriter from "../CommentAnswerWriter";
import CommentAnswerPage from "../CommentAnswerList";
import { timeForToday } from "../../../../../commons/library/utils2";
import { getDate } from "../../../../../commons/library/utils";
import { IQuery } from "../../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/layout/header";
import { useQuery } from "@apollo/client";

export default function CommentListItemUI(props: IBoardCommentsListUI) {
  const [isEdit, setIsEdit] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [loginUser, setLoginUser] = useState(false)

  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if(data?.fetchUserLoggedIn._id === props.el.user._id) {
      setLoginUser(true)
    }
  },[data])

  const onClickEdit = () => {
    setIsEdit(true);
  };
  const onClickAnswer = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div key={props.el._id}>
      {props.isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onOk={props.onClickDelete}
          onCancel={props.handleCancel}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </S.PasswordModal>
      )}
      {!isEdit && (
        <S.Back>
          <S.Comment>
            <S.UserWrap>
              <S.User>
              {props.el.user.name}
              </S.User>
            </S.UserWrap>
            <S.Wrapper>
              <S.CmtMain onClick={props.onClickComment}>
                <S.Cmt>{props.el.contents}</S.Cmt>
              </S.CmtMain>
              <S.DateWrapper>
                  <S.CmtDate>{getDate(props.el.createdAt)}</S.CmtDate>
                  {loginUser ?        <S.IconWrapper>
                    <S.IconEdit
                      src="/vector-12.png"
                      id={props.el._id}
                      onClick={onClickEdit}
                    />
                    <S.IconDelete
                      id={props.el._id}
                      onClick={props.onClickDelete}
                      src="/vector-13.png"
                    />
                  </S.IconWrapper>
                  :<S.IconAnswer
                  onClick={onClickAnswer}
                  src="/Vector.png" 
                  />
                  }
                </S.DateWrapper>
            </S.Wrapper>
          </S.Comment>
          {isActive && <CommentAnswerWriter el={props.el} setIsActive={setIsActive}/>}
            <CommentAnswerPage el={props.el} />
        </S.Back>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
