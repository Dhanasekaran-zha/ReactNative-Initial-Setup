import axios from 'axios';
import ApiConstants from '../../constatnts/ApiConstants/ApiConstants';
import { LOAD_DATA, SHOW_OR_HIDE_LOADING } from '../../constatnts/ReduxConstants/Constants';
import { ApiService } from '../../services/ApiService';

export const showLoading = (data) => ({
  type: SHOW_OR_HIDE_LOADING,
  payload: data
});


export const loadAPIData=(callBack)=>{
  return async dispatch=>{
    
    dispatch(showLoading(true))
    const res = await ApiService.getApi(ApiConstants.USERS)
    dispatch(showLoading(false))

    if(res.status===200){
      callBack(res.data)
    }else{

    }
  }
}