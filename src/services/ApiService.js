import { create } from 'apisauce'
import ApiConstants from '../constatnts/ApiConstants/ApiConstants'

const apiClient = create({
    baseURL: ApiConstants.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 60000,
  })
  /**
 * @param {string} endpoint contains the api endpoint to hit API service call
 * @param {string} token contains the auth token
 * @returns {Object} api response
 */
function getApi(endpoint, token) {
    if (token) {
      apiClient.setHeader('Authorization', 'Bearer ' + token)
    }
   
    return apiClient.get(endpoint)
  }
  
  /**
   * @param {string} endpoint contains the api endpoint to hit API service call
   * @param {Object} data contains the request informations to hit API service call
   * @param {string} token contains the auth token
   * @returns {Object} api response
   */
  function postApi(endpoint, data, token) {
    if (token) {
      apiClient.setHeader('Authorization', 'Bearer ' + token)
    }
    return apiClient.post(endpoint, data)
  }
  
  /**
   * @param {string} endpoint contains the api endpoint to hit API service call
   * @param {Object} data contains the request informations to hit API service call
   * @param {string} token contains the auth token
   * @returns {Object} api response
   */
  function putApi(endpoint, data, token) {
    if (token) {
      apiClient.setHeader('Authorization', 'Bearer ' + token)
    }
    return apiClient.put(endpoint, data)
  }
  
  /**
   * @param {string} endpoint contains the api endpoint to hit API service call
   * @param {string} token contains the auth token
   * @returns {Object} api response
   */
  function deleteApi(endpoint, token) {
    if (token) {
      apiClient.setHeader('Authorization', 'Bearer ' + token)
    }
    return apiClient.delete(endpoint)
  }
  
  export const ApiService = {
    getApi,
    postApi,
    putApi,
    deleteApi,
  }
  
  