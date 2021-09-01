import { atom } from "recoil";

export const photoSearchTextFormCountState = atom<number>({
    key: "photoSearchTextFormCount",
    default: 0,
});