import { createContext } from "react";
import { CallApiActions, CallApiState, initialState } from "../../reducer/actions/callapi";

export const StateContext = createContext<{
  state: CallApiState;
  dispatch: React.Dispatch<CallApiActions>;
  }>({
      state: initialState,
      dispatch: () => undefined,
  });