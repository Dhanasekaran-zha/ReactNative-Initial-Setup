import {MOBILE_NUMBER} from '../../constatnts/ReduxConstants/Constants';

const initialState = {
  data: '3452435'
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOBILE_NUMBER:
      return {
        ...state,
        data: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default mobileReducer;
