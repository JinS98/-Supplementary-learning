import { ChangeEvent, useEffect, useRef, useState } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";
import _ from "lodash";
import { searchValueState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function Searchbars01(props: ISearchbars01Props) {
  const [value, setValue] = useRecoilState(searchValueState);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickSrc = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [isActive]);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <Searchbars01UI
      onClickSrc={onClickSrc}
      onSearch={onSearch}
      isActive={isActive}
      inputRef={inputRef}
    />
  );
}
