import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as CompetitionsActions } from '../ducks/competitions';

export function* footballCompetitionsRequest(action) {
  try {
    const { data } = yield call(api.get, 'competitions/');
    yield put(CompetitionsActions.competitionsSucess(data.competitions));
  } catch (err) {
    console.tron.error(err);
  }
}
