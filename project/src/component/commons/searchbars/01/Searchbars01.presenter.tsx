import * as S from "./Searchbars01.styles";
import { ISearchbars01Props } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01Props) {
  return (
    <>
      {" "}
      {!props.isActive && (
        <S.Search onClick={props.onClickSrc}>
          <img src="/Vector-14.png"></img>
          검색
        </S.Search>
      )}
      {props.isActive && (
        <>
          <S.Input type="text" onChange={props.onSearch} ref={props.inputRef} />
          <S.Search_2 onClick={props.onClickSrc}>
            <img src="/Vector-14.png"></img>
            검색
          </S.Search_2>
        </>
      )}
    </>
  );
}
