import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let store = (set) => ({
  errors: null,
  accessToken: null,
  userId: null,
  username: null,
  email: null,
  like: [],
  pass: [],

  likeFriend: (data) => {
    set((state) => ({
      ...state,
      like: [...state.like, data]
      // like: []
    }))
  },

  passFriend: (data) => {
    set((state) => ({
      ...state,
      pass: [...state.pass, data]
      // pass: []
    }))
  },

  login: (data) => {
    set((state) => ({
      ...state,
      userId: data.sub,
      username: data.username,
      accessToken: data.accessToken,
      email: data.email,
    }))
  },
  logout: () => {
    set((state) => ({
      ...state,
      userId: null,
      username: null,
      accessToken: null,
      email: null,
    }))
  },
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'user' }) // Persist to local storage

export default create(store)
