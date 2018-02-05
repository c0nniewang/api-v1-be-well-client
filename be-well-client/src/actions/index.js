import { ASYNC_START, SET_CURRENT_USER, LOGOUT_USER, FETCH_USER_INFO, LOGIN_ERROR, ADD_DAILY_UPDATE , ADD_GOAL} from './types';
import { adapter } from '../services';

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.getCurrentUser()
  .then(user => {
    dispatch({ type: SET_CURRENT_USER, user})
  })
}

export const loginUser = (email, password, history) => dispatch => {
  dispatch({ type: ASYNC_START})

  adapter.auth.login({ email, password }).then(user => {
    if (user.error) {
      dispatch({type: LOGIN_ERROR})
    } else {
    localStorage.setItem('token', user.jwt)
    dispatch({ type: SET_CURRENT_USER, user})
    history.push('/profile')
    }
  })
}

export const logoutUser = () => {
  localStorage.removeItem('token')
  return {type: LOGOUT_USER}
}

export function fetchUserInfo(id) {
  return (dispatch) => {
    dispatch({ type: ASYNC_START});
    return fetch(`http://localhost:3001/api/v1/users/${id}`)
    .then(resp => resp.json())
    .then(user => dispatch({ type: FETCH_USER_INFO, user}))
  }
}

export const newDailyUpdate = (data) => dispatch => {
  dispatch({ type: ASYNC_START});

  adapter.daily_updates.createDailyUpdate(data)
  .then(update => {
    dispatch({ type: ADD_DAILY_UPDATE, update})
  })
}

export const newGoal = (data) => dispatch => {
  dispatch({ type: ASYNC_START});

  adapter.goals.createGoal(data)
  .then(goal => {
    dispatch({ type: ADD_GOAL, goal})
  })
}