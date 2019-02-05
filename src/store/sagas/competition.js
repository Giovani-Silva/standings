import { call, put } from 'redux-saga/effects';

import { Creators as CompetitionActions } from '../ducks/copetition';

export function* footballCompetitionRequest(action) {
  try {
    // const { data } = yield call(api.get, '/me', {
    //   headers: { Authorization: `Bearer ${action.payload.token}` },
    // });
    // yield put(MeActions.successData(data));
  } catch (err) {
    // console.tron.error(err);
  }
}
