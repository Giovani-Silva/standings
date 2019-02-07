import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as StandingsActions } from '../ducks/standings';

export function* footballStandingsRequest(action) {
  try {
    // Standigs only plan free TIER_ONE, another result in error 403
    const id = action.payload;
    const { data } = yield call(api.get, `competitions/${id}/standings`);
    yield put(StandingsActions.standingsRequestSuccess(data));
  } catch (err) {
    console.tron.error(err);
    yield put(
      StandingsActions.standingsRequestError(
        'The resource you are looking for is restricted amother plan',
      ),
    );
  }
}
