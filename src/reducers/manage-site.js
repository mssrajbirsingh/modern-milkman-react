import {
  GET_SITE_DATA_REQUESTED,
  GET_SITE_DATA_SUCCESS
} from "../actions/manage-site-action-type";

const initialState = {

  getSiteDataObject: [],
  getSiteStatus: null,
  getSiteError: null,
  isLoading: false,

};

const ManageSite = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_SITE_DATA_REQUESTED:
      return {
        ...state,
        getSiteError: null,
        getSiteStatus: null,
        isLoading: true,
      };
    case GET_SITE_DATA_SUCCESS:
      return {
        ...state,
        getSiteDataObject: payload,
        getSiteStatus: "success",
        isLoading: false,
      };
 
    default:
      return { ...state };
  }
};
export default ManageSite;
