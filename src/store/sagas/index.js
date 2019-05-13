import { all, takeLatest } from 'redux-saga/effects'
import { addUser, deleteUser } from './users'
import { openDialog, closeDialog } from './dialogs'

import { Types as UserTypes } from '../ducks/users'
import { Types as DialogTypes } from '../ducks/dialogs'

export default function * rootSage () {
  yield all([takeLatest(UserTypes.ADD_REQUEST, addUser)])
  yield all([takeLatest(UserTypes.REMOVE_REQUEST, deleteUser)])
  yield all([takeLatest(DialogTypes.OPEN_DIALOG, openDialog)])
  yield all([takeLatest(DialogTypes.CLOSE_DIALOG, closeDialog)])
}
