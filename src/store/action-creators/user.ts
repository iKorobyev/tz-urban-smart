import {Dispatch} from "redux";
import {UserAction, UserActionTypes} from "../../types/user";

export const fetchUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USER})
      dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: { login: 'developer21', password: '123456' }})
    } catch (e) {
      dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: 'Произошла ошибка при загрузке пользователей!'})
    }
  }
}