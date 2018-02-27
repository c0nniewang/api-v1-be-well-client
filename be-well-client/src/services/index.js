const API_ROOT = 'http://localhost:3001/api/v1'

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
}

const getWithToken = url => {
  const token = localStorage.getItem('token')
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json())
}

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`)
}

const login = data => {
  return fetch(`${API_ROOT}/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const createUser = data => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const createDailyUpdate = data => {
  return fetch(`${API_ROOT}/daily_updates`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const createGoal = data => {
  return fetch(`${API_ROOT}/goals`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const fetchCognitiveDistortions = () => {
  return fetch(`${API_ROOT}/cognitive_distortions`)
  .then(res => res.json())
}

const newThoughtEntry = data => {
  return fetch(`${API_ROOT}/thought_entries`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const completedGoal = data => {
  return fetch(`${API_ROOT}/completed`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({id: data.goal_id})
  }).then(res => res.json())
}

const newReflection = data => {
  return fetch(`${API_ROOT}/goal_reflections`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const deleteGoal = id => {
  return fetch(`${API_ROOT}/goals/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

const fetchMeditations = () => {
  return fetch(`${API_ROOT}/meditations`)
  .then(resp => resp.json())
}

const newSession = data => {
  return fetch(`${API_ROOT}/meditation_sessions`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

const addFavoriteMeditation = ({ user_id, meditation_id}) => {
  return fetch(`${API_ROOT}/users/${user_id}/favorite_meditations`, {
    method: 'POST',
    headers,
    body: JSON.stringify({user_id, meditation_id})
  }).then(resp => resp.json())
}

const removeFavoriteMeditation = ({ user_id, meditation_id }) => {
  return fetch(`${API_ROOT}/users/${user_id}/favorite_meditations/`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({ user_id, meditation_id})
  }).then(resp => resp.json())
}

const deleteThought = id => {
  return fetch(`${API_ROOT}/thought_entries/${id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

const updateGoal = data => {
  const id = data.goalId
  return fetch(`${API_ROOT}/goals/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

export const adapter = {
  auth: {
    login,
    getCurrentUser,
    createUser
  },

  daily_updates: {
    createDailyUpdate
  },

  goals: {
    createGoal,
    completedGoal,
    newReflection,
    deleteGoal,
    updateGoal
  },

  cogDistortions: {
    fetchCognitiveDistortions
  },

  thoughts: {
    newThoughtEntry,
    deleteThought
  },

  meditation: {
    fetchMeditations,
    newSession,
    addFavoriteMeditation,
    removeFavoriteMeditation
  }
}