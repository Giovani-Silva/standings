import { all, takeLatest } from 'redux-saga/effects';

import { Types as CompetitionsTypes } from '../ducks/competitions';
import { footballCompetitionsRequest } from './competitions';

import { Types as StandingsTypes } from '../ducks/standings';
import { footballStandingsRequest } from './standings';

export default function* rootSaga() {
  yield all([
    takeLatest(CompetitionsTypes.GET_REQUEST, footballCompetitionsRequest),
    takeLatest(StandingsTypes.GET_REQUEST, footballStandingsRequest),
  ]);
}
