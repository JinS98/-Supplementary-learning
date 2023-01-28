import { ApolloQueryResult } from "@apollo/client";
import { BlockList } from "net";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars01Props {
  onClickSrc: () => void;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}
