import { DATA } from "./action";

export const reducer = (state, action) => {
  //   console.log(action.payload);
  if (action.type === DATA) {
    return { ...state, data: action.payload.respData };
  }
};
