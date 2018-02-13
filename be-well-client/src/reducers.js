import { combineReducers } from 'redux';
import { ASYNC_START, SET_CURRENT_USER, LOGOUT_USER, FETCH_USER_INFO, LOGIN_ERROR, ADD_DAILY_UPDATE, ADD_GOAL, ADD_COG_DIST, ADD_THOT, COMPLETE_GOAL, ADD_REFLECTION, DELETE_GOAL, ADD_SESSION, FETCH_MEDITATIONS, ADD_FAVORITE_MED, REMOVE_FAVORITE_MED } from './actions/types';

const defaultState = { profile: {}, loading: false}
const initialState = { currentUser: {} };
const goalsState = { active: [], completed: [] };
const medState = { all: [], favorites: [] }

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
      return {...state, loading: true}
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
    case ADD_REFLECTION:
      const goalid = action.json.goal_id
      const completedGoal = state.completed.find(el => el.id === goalid)
      completedGoal.date_completed = new Date()
      completedGoal.goal_reflections.push(action.json)

      // const arr = state.completed.slice(0, state.completed.length - 1)
      return {
        ...state,
        active: state.active,
        completed: [...state.completed]
      }
    case DELETE_GOAL:
      return {
        ...state,
        active: state.active,
        completed: state.completed.filter(el => el.id !== action.json.id)
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
      return [...state, action.thought]
    default:
      return state
  }
}

const updatesReducer = (state = [], action) => {
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

const meditationReducer = (state = medState, action) => {
  switch (action.type) {
    case FETCH_MEDITATIONS:
      return { all: [...action.json], favorites: []}
    case FETCH_USER_INFO:
      return { all: state.all, favorites: [...action.user.favorite_meditations]}
    case ADD_FAVORITE_MED:
      return {...state, all: state.all, favorites: [...state.favorites, action.json]}
    case REMOVE_FAVORITE_MED:
      return {...state, all: state.all, favorites: state.favorites.filter(el => el.id !== action.json.id)}
    default:
      return state
  }
}

const meditationSessionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return [...action.user.meditation_sessions]
    case ADD_SESSION:
      return [...state, action.json]
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
  meditations: meditationReducer,
  sessions: meditationSessionsReducer
});

export default rootReducer;