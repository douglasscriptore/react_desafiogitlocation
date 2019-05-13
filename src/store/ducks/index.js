import { combineReducers } from 'redux'
import users from './users'
import dialogs from './dialogs'

export default combineReducers({ users, dialogs })
