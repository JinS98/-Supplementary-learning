import { atom, selector } from "recoil";
import { getAccessToken } from "../library/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const searchValueState = atom({
  key: "searchValueState",
  default: "",
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const userNameState = atom({
  key: "userNameState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
export const TodayItemState = atom({
  key: "TodayItemState",
  default: [],
});
export const recentGameState = atom({
  key: "recentGameState",
  default: [],
});
export const basketsState = atom({
  key: "basketsState",
  default: 0,
});
