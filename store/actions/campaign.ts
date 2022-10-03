import axios from 'axios';
import { CAMPAIGN_LIST } from "@app/store/constants/campaign";

export const setCampaignData = (data) => {
  return {
    type: CAMPAIGN_LIST,
    data
  }
}

export const getCampaignList = async () => {
  // console.log(accessToken, 'accessToken')
  return axios.get('/api/campaigns', {
    // headers: {
    //   authorization: accessToken
    // }
  })
}
export const getCampaignListById = async (id:any) => {
  // console.log(accessToken, 'accessToken')
  return axios.get(`/api/campaigns/${id}`, {
    // headers: {
    //   authorization: accessToken
    // }
  })
}
export const addCampaignList = async (data: any) => {
  // console.log(accessToken, 'accessToken')
  return axios.post('/api/campaigns', data
    // headers: {
    //   authorization: accessToken
    // }
  )
}
export const delteCampaignList = async (id: any) => {
  // console.log(accessToken, 'accessToken')
  return axios.delete(`/api/campaigns/${id}`
    // headers: {
    //   authorization: accessToken
    // }
  )
}
export const updateCampaignList = async (id: any, data: any) => {
  // console.log(accessToken, 'accessToken')
  return axios.put(`/api/campaigns/${id}`, data
    // headers: {
    //   authorization: accessToken
    // }
  )
}
