import { SHOW_OR_HIDE_LOADING } from "../../constatnts/ReduxConstants/Constants";

const initialState = {
    isLoading:false,
  };

  
  const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_OR_HIDE_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default CommonReducer;