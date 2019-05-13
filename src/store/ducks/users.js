/**
 * Types
 */
export const Types = {
  CLEAR: 'users/CLEAR',
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE_REQUEST: 'users/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'users/REMOVE_SUCCESS'
}

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
}

export default function users (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CLEAR:
      return { ...state, error: null }
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      }
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    case Types.REMOVE_REQUEST: {
      return { ...state, loading: true, error: null }
    }
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      }
    default:
      return state
  }
}

/**
 * ACTIONS
 * A função no redux que criam as actions são chamadas de ActionCreators
 */
export const Creators = {
  // addFavoriteRequest() lançada pelo componente o REQUEST vai ser ouvido pelo SAGA, que faz a CHAMADA A API
  // após receber os dados da API chama o success
  clear: () => ({
    type: Types.CLEAR
  }),
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user }
  }),
  // o SAGA chama o Success após a chamada API, dai ele vai enviar p/ o reducer os dados do repositorio
  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  // action que adiciona o erro
  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  // action que solicita remoção do usuario
  removeUserRequest: user => ({
    type: Types.REMOVE_REQUEST,
    payload: { user }
  }),
  // action que solicita remoção do usuario
  removeUserSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data }
  })
}
