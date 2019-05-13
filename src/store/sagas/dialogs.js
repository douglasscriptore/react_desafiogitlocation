import { put } from 'redux-saga/effects'

import { Creators as DialogActions } from '../ducks/dialogs'
import { Creators as UserActions } from '../ducks/users'

export function * openDialog (action) {
  yield put(DialogActions.openDialogSuccess(action.payload.dialog))
}

export function * closeDialog (action) {
  yield put(UserActions.clear())
  yield put(DialogActions.closeDialogSuccess(action.payload.dialog))
}
