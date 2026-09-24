import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'
})

export const getNotes = () => api.get('/notes/')
export const getNoteById = (id) => api.get(`/notes/${id}/`)
export const createNote = (payload) => api.post('/notes/', payload)
export const updateNote = (id, payload) => api.put(`/notes/${id}/`, payload)
export const deleteNote = (id) => api.delete(`/notes/${id}/`)
