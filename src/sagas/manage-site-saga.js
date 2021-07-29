import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_SITE_DATA,
  getSiteDataRequested,
  getSiteDataSuccess
} from "../actions/manage-site-action-type";
import Utils from "../utils";
import { config } from 'dotenv';
const {
  httpHelper: { getRequest },
} = new Utils().getAll();

//let url='https://developertests.z33.web.core.windows.net/ReactTestData.json'
let url= process.env.REACT_APP_API_URL

console.log(config);

export function* getManageSiteData() {
  const dataparam = {
   
    url: `${url}`,
  };
  yield put(getSiteDataRequested());
  try {
    const { data, error } = yield call(getRequest, dataparam);
    if (data && !error) {
      yield put(getSiteDataSuccess(data));
    } else {
    }
  } catch (error) {}
}

function* ManageSiteSaga() {
const dataparam = {
   
  url: `${url}`,
};
yield put(getSiteDataRequested());
try {
  const { data, error } = yield call(getRequest, dataparam);
  if (data && !error) {
    yield put(getSiteDataSuccess(data));
  } else {
  console.log('this is not sending data') ;

  }
} catch (error) {}
  yield takeLatest(GET_SITE_DATA, getManageSiteData);
}
export default ManageSiteSaga;
