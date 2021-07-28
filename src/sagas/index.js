import { all } from "redux-saga/effects";
import ManageSiteSaga from "./manage-site-saga";

// import watchers from other files 
export default function* rootSaga() {
  yield all([ManageSiteSaga()]);
}
