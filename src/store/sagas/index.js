import { all, takeLatest } from 'redux-saga/effects';

import { Types as CompetitionTypes } from '../ducks/competition';
import { footballCompetitionRequest } from './competition';

export default function* rootSaga() {
  yield all([takeLatest(CompetitionTypes.GET_REQUEST, footballCompetitionRequest)]);
}
