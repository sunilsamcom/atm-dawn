import { ICampaignState } from "@app/store/types/campaign";
import { CAMPAIGN_LIST } from "@app/store/constants/campaign";

const initialState: ICampaignState = {
  page: 0,
  pageSize: 25,
  rows: [],
  loading: false,
};

const campaignReducers = (state = initialState, action) => {
  switch (action.type) {
  case CAMPAIGN_LIST:
    return {
      ...state,
      data: action?.data ?? initialState
    };
  default:
    return { ...state };
  }
}

export default campaignReducers;
