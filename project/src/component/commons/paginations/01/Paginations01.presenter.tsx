import * as S from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <S.Wrapper>
      <S.Last onClick={props.onClickPrevPage} disabled={props.startPage === 1}>
        {"<"}
      </S.Last>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Btn
              pageClick={
                props.pageClick === index + props.startPage ? true : false
              }
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              style={{ margin: "10px" }}
            >
              {index + props.startPage}
            </S.Btn>
          )
      )}
      <S.Last
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 > props.lastPage}
      >
        {">"}
      </S.Last>

      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, index) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
          <span key={el} id={String(el)} onClick={onClickPage}>
            {el}
          </span>
        ))} */}

      {/* <span id="1" onClick={onClickPage}>1</span>
        <span id="2" onClick={onClickPage}>2</span>
        <span id="3" onClick={onClickPage}>3</span> */}
    </S.Wrapper>
  );
}
