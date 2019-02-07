import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as StandingsActions } from '../ducks/standings';

export function* footballStandingsRequest(action) {
  try {
    // const { data } = yield call(api.get, 'competitions/', action.payload, 'standings');
    const { data } = yield call(api.get, `competitions/${action.payload}/standings`);
    console.tron.log(data);
    // yield put(CompetitionsActions.standingsRequestSuccess(data));
  } catch (err) {
    console.tron.error(err);
  }
}
