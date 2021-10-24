import {MOBILE_NUMBER}from "../../constatnts/ReduxConstants/Constants"
export const checkMobileNumber=(mobileNumber)=>({
    type:MOBILE_NUMBER,
    payload:{mobileNumber:mobileNumber}
})