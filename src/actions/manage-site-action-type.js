import { createAction } from "redux-actions";


export const GET_SITE_DATA = "GET_SITE_DATA";
export const getSiteData = createAction(GET_SITE_DATA);

export const GET_SITE_DATA_REQUESTED = "GET_SITE_DATA_REQUESTED";
export const getSiteDataRequested = createAction(GET_SITE_DATA_REQUESTED);

export const GET_SITE_DATA_SUCCESS = "GET_SITE_DATA_SUCCESS";
export const getSiteDataSuccess = createAction(GET_SITE_DATA_SUCCESS);


