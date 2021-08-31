
export type CallApiState = {
  data: any,
  status: "none" | "pending" | "success" | "fail"
}

export type CallApiActions = {
  type: "init" | "pending" | "success" | "fail",
  data?: any
}

export const actions = (state: CallApiState, action: CallApiActions):CallApiState => {
  switch (action.type) {
    case 'init':
      return initialState
    case 'pending':
      return {
        data: undefined,
        status: "pending"
      };
    case 'success':
      return {
        data: action.data,
        status: "success"
      };
    case 'fail':
      return {
        data: action.data,
        status: "fail"
      };
    default:
      return state;
  }
}

export const initialState: CallApiState = {
  data: undefined,
  status: "none"
}
