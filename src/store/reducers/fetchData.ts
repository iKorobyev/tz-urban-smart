import {IInitState, UserAction, UserActionTypes} from '../../types/user'

const initState: IInitState = {
  user: {},
  loading: false,
  error: null
}

export const userReducer = (state = initState, action: UserAction): IInitState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { loading: true, error: null, user: {} }
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { loading: false, error: null, user: action.payload }
    case UserActionTypes.FETCH_USER_ERROR:
      return { loading: false, error: action.payload, user: {} }
    default:
      return state
  }
}