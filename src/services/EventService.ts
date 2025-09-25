import axios from 'axios'
import type { Event,Organization } from '@/types'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
//'http://localhost:8080/'

export default {
  getEvents(perPage: number, page: number) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id: number) {
    return apiClient.get('events/' + id)
  },
  saveEvent(event: Event) {
    return apiClient.post('/events', event)
  },
  // Organization endpoints
  saveOrganization(org: Organization) {
    return apiClient.post('/organizations', org)
  },
}