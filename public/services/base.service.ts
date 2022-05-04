import userStore from '../stores/user';

export const baseUrl = 'http://localhost:3001'

export const makeConfig = () => (
    {
        headers: {
            Authorization: `Bearer ${userStore.getState().accessToken}`
        }
    })