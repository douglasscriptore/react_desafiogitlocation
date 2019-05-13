import { call, put, select } from 'redux-saga/effects'
import api from '../../services/api'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Creators as UserActions } from '../ducks/users'
import { Creators as DialogActions } from '../ducks/dialogs'

export function * addUser (action) {
  // inicia o toast
  let toastId = toast.info('Aguarde...')
  try {
    // faz a chamada na api
    const { data } = yield call(api.get, `/users/${action.payload.user.name}`)

    // verifica se valor é duplicado
    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.id === data.id)
    )
    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Usuário Duplicado'))
      toast.update(toastId, {
        render: 'Usuário Duplicado',
        type: toast.TYPE.ERROR,
        autoClose: 3000
      })
    } else {
      const newData = {
        id: data.id,
        login: data.login,
        name: data.name,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        latitude: action.payload.user.latitude,
        longitude: action.payload.user.longitude
      }
      yield put(UserActions.addUserSuccess(newData))
      yield put(DialogActions.closeDialogSuccess(false))
      action.payload.name = ''
      toast.update(toastId, {
        render: newData.name + ' adicionado',
        type: toast.TYPE.SUCCESS,
        autoClose: 3000
      })
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('Erro ao adicionar'))
    toast.update(toastId, {
      render: 'Erro ao adicionar',
      type: toast.TYPE.ERROR,
      autoClose: 3000
    })
  }
}

export function * deleteUser (action) {
  const newData = yield select(state =>
    state.users.data.filter(user => user.id !== action.payload.user.id)
  )
  yield put(UserActions.removeUserSuccess(newData))
  toast.success(action.payload.user.name + ' removido')
}
