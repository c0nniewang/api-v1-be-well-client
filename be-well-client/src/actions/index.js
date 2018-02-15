import { ASYNC_START, SET_CURRENT_USER, LOGOUT_USER, FETCH_USER_INFO, LOGIN_ERROR, ADD_DAILY_UPDATE , ADD_GOAL, ADD_COG_DIST, ADD_THOT, COMPLETE_GOAL, ADD_REFLECTION, DELETE_GOAL, ADD_SESSION, FETCH_MEDITATIONS, ADD_FAVORITE_MED, REMOVE_FAVORITE_MED } from './types';
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
    history.push('/profile/home')
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

export const createUser = (email, password, phone_number, name, history) => dispatch => {

  adapter.auth.createUser({ email, password, phone_number, name})
  .then(user => {
    if (user.error) {
      alert('error')
    } else {
      localStorage.setItem('token', user.jwt)
      dispatch({ type: SET_CURRENT_USER, user: user.user})
      history.push('/profile/home')
    }
  })
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

export const fetchCognitiveDistortions = () => {
  return (dispatch) => {
    dispatch({ type: 'ASYNC_START' });

    adapter.cogDistortions.fetchCognitiveDistortions()
    .then(cog => {
      dispatch({ type: ADD_COG_DIST, cog})
    })
  }
}

export const newThoughtEntry = (data) => dispatch => {
  dispatch({ type: ASYNC_START });

  adapter.thoughts.newThoughtEntry(data)
  .then(thought => {
    dispatch({ type: ADD_THOT, thought})
  })
}

export const completedGoal = ({success, emotions, mood_num, goal_id}) => dispatch => {
  dispatch({ type: ASYNC_START });

  adapter.goals.completedGoal({ goal_id})
  .then(json => {
    dispatch({ type: COMPLETE_GOAL, json})
  }).then(() => adapter.goals.newReflection({success, emotions, mood_num, goal_id}))
  .then(json => {
      dispatch({ type: ADD_REFLECTION, json})
  })
}

export const deleteGoal = (id) => dispatch => {
  adapter.goals.deleteGoal(id)
  .then(json => {
    dispatch({ type: DELETE_GOAL, json})
  })
}

export const fetchMeditations = () => dispatch => {
  adapter.meditation.fetchMeditations()
  .then(json => {
    dispatch({ type: FETCH_MEDITATIONS, json})
  })
}

export const newSession = (data) => dispatch => {
  adapter.meditation.newSession(data)
  .then(json => {
    dispatch({ type: ADD_SESSION, json})
  })
}

export const addFavoriteMeditation = (data) => dispatch => {
  adapter.meditation.addFavoriteMeditation(data)
  .then(json => {
    dispatch({ type: ADD_FAVORITE_MED, json})
  })
}

export const removeFavoriteMeditation = (data) => dispatch => {
  adapter.meditation.removeFavoriteMeditation(data)
  .then(json => {
    dispatch({ type: REMOVE_FAVORITE_MED, json })
  })
}