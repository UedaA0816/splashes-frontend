import { atom } from "recoil";

export const photoSearchTextFormState = atom<string>({
    key: "photoSearchTextForm",
    default: '',
});