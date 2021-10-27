export interface IUser {
  login?: string;
  password?: string;
}

export interface IInitState {
  user: IUser;
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

export interface FetchUserAction {
  type: UserActionTypes.FETCH_USER
}

export interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: {
    login: string,
    password: string
  }
}

export interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction