/**
 * Types
 */

export const Types = {
  OPEN_DIALOG: 'dialog/OPEN',
  OPENED_DIALOG: 'dialog/OPENED_DIALOG',
  CLOSE_DIALOG: 'dialog/CLOSE',
  CLOSED_DIALOG: 'dialog/CLOSED'
}

/**
 * REDUCER
 */

const INITIAL_STATE = {
  open: false,
  latitude: 0,
  longitude: 0
}

export default function dialogs (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_DIALOG:
      return {
        ...state,
        open: true,
        latitude: action.payload.dialog.latitude,
        longitude: action.payload.dialog.longitude
      }
    case Types.OPENED_DIALOG:
      return {
        ...state,
        open: true,
        latitude: action.payload.dialog.latitude,
        longitude: action.payload.dialog.longitude
      }
    case Types.CLOSE_DIALOG:
      return { ...state, latitude: 0, longitude: 0, open: false }
    case Types.CLOSED_DIALOG:
      return { ...state, latitude: 0, longitude: 0, open: false }
    default:
      return state
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  openDialogRequest: dialog => ({
    type: Types.OPEN_DIALOG,
    payload: { dialog }
  }),
  openDialogSuccess: dialog => ({
    type: Types.OPENED_DIALOG,
    payload: { dialog }
  }),
  closeDialogRequest: dialog => ({
    type: Types.CLOSE_DIALOG,
    payload: { dialog }
  }),
  closeDialogSuccess: dialog => ({
    type: Types.CLOSED_DIALOG,
    payload: { dialog }
  })
}
