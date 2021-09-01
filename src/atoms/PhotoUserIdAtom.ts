import { atom } from "recoil";

const user_id = localStorage.getItem("user_id") || ""

export const photoUserIdState = atom<string>({
    key: "photoUserId",
    default: user_id,
});