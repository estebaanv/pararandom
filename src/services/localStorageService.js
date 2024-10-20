import axios from 'axios';

const url = 'http://localhost:3000/usuarios';

const mockStorage = {};

export default {
    async fetchAndStoreUserData(userId) {
        try {
            const response = await axios.get(`${url}/${userId}`);
            const userData = response.data;
            this.setItem('userData', userData);
            return userData;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    },
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    getItem(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    
    removeItem(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    }
};
