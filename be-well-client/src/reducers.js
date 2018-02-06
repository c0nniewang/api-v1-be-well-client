import { combineReducers } from 'redux';
import { ASYNC_START, SET_CURRENT_USER, LOGOUT_USER, FETCH_USER_INFO, LOGIN_ERROR, ADD_DAILY_UPDATE, ADD_GOAL, ADD_COG_DIST, ADD_THOT, COMPLETE_GOAL} from './actions/types';

const defaultState = { profile: {}, loading: false}
const initialState = { currentUser: {} };
const goalsState = { active: [], completed: [] };

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      const { id, email } = action.user;
      return {...state, currentUser: { id, email }}
    case LOGOUT_USER:
      return {...state, currentUser: {}, login_error: false }
    case LOGIN_ERROR:
      return {...state, currentUser: {}, login_error: true}
    default:
      return state;
  }
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ASYNC_START:
      return {...state, profile: {}, loading: true}
    case FETCH_USER_INFO:
      console.log('FETCHING USER', action)
      return {
        ...state,
        profile: {
          email: action.user.email, 
          name: action.user.name, 
          phone_number: action.user.phone_number
        },
        loading: false
      };
    default:
      return state
  }
}

const goalsReducer = (state = goalsState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      const completed = action.user.goals.filter(goal => goal.completed === true)
      const active = action.user.goals.filter(goal => goal.completed === false)
      return {...state, active: active, completed: completed}
    case ADD_GOAL:
      return {
        ...state, 
        completed: state.completed,
        active: [...state.active, action.goal]
      } 
    case COMPLETE_GOAL:
      const id = action.json.goalId
      const goal = state.active.find(el => el.id === id)
      return {
        ...state,
        active: state.active.filter(el => el.id !== id),
        completed: [...state.completed, goal]
      }
  default:
    return state
  }
}

const thoughtsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_USER_INFO:
      return [...action.user.thought_entries]
    case ADD_THOT:
      return [...state, action.thot]
    default:
      return state
  }
}

const updatesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return [...action.user.daily_updates]
    case ADD_DAILY_UPDATE:
      return [...state, action.update]
    default:
      return state
  }
}

const cogsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COG_DIST:
      return [...action.cog]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  goals: goalsReducer,
  thoughts: thoughtsReducer,
  updates: updatesReducer,
  cogDistortions: cogsReducer,
});

export default rootReducer;