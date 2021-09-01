import axios from "axios";
import { selector } from "recoil";
import { photoSearchTextFormState } from '../atoms/PhotoSearchTextFormAtom';
import { photoSearchTextFormCountState } from '../atoms/PhotoSearchTextFormCountAtom';
import { photoUserIdState } from "../atoms/PhotoUserIdAtom";
import { getPhotosResponse } from "../types/api/getPhotosResponse";
import Photo from '../types/Photo';

export const searchedPhotoListSelector = selector<Photo[]|undefined>({
  key: "searchedPhotoListSelector",
  // getは{ get }を引数に取る関数
  get: async ({ get }) => {
    // 引数のgetを使ってAtomから最新の値を取得(タスク一覧)
    const user_id:string = get(photoUserIdState)
    // 同様に検索フィールドの文字列を取得
    const searchText: string = get(photoSearchTextFormState);

    get(photoSearchTextFormCountState)

    //APi
    const response = axios.get<getPhotosResponse>(`http://localhost:3001/photos?user_id=${user_id}&label=${searchText}`)
    const json = response.then((v)=>v.data.data)

    return json
  },
  set:({get,set})=>{
    const count = get(photoSearchTextFormCountState)
    set(photoSearchTextFormCountState,count + 1)
  }
});