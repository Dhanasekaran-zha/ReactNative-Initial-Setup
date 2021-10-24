import {LOAD_DATA} from '../../constatnts/ReduxConstants/Constants';

const initialState = {
  data: '',
};

const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ApiReducer;
