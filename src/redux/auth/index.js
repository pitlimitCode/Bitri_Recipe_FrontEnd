import * as Type from "./type";

const initialState = {
  isLogin: false,
  username: '',
  token: ''
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_ISLOGIN:
      return { ...state,  isLogin: payload };

    case Type.SET_USERNAME:
      return { ...state,  username: payload };

    case Type.SET_TOKEN:
      return { ...state,  token: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";