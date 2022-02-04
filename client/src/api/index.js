import axios from 'axios'

const apiUrl = axios.create({ baseURL: 'http://localhost:8080/api' })

export const addNewMember = payload => apiUrl.post('/member', payload)
export const getAllMembers = () => apiUrl.get('/members')
export const getMemberById = id => apiUrl.get(`/member/${id}`)
export const updateMemberById = (id, payload) => apiUrl.put(`/member/${id}`, payload)
export const deleteMemberById = id => apiUrl.delete(`/member/${id}`)

const api = {
    addNewMember,
    getAllMembers,
    updateMemberById,
    deleteMemberById,
    getMemberById,
}

export default api