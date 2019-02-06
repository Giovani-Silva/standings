import { all, takeLatest } from 'redux-saga/effects';

import { Types as CompetitionsTypes } from '../ducks/competitions';
import { footballCompetitionsRequest } from './competitions';

export default function* rootSaga() {
  yield all([takeLatest(CompetitionsTypes.GET_REQUEST, footballCompetitionsRequest)]);
}
