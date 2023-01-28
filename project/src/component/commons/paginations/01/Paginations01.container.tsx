import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../../units/board/list/BoardList.queries";

import Paginations01UI from "./Paginations01.presenter";
import { IPaginations01Props } from "./Paginations01.types";

export default function Paginations01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [pageClick, setPageClick] = useState(1);

  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;

  console.log(lastPage);

  // const mystyles = {
  //     margin: "10px"
  // }

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    setPageClick(Number(event.currentTarget.id));
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  // const onClickPage2 = () => {
  //   void refetch({ page: 2 });
  // };

  // const onClickPage3 = () => {
  //   void refetch({ page: 3 });
  // };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
    setPageClick(startPage - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
      setPageClick(startPage + 10);
    }
  };

  return (
    <Paginations01UI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      pageClick={pageClick}
    />
  );
}
