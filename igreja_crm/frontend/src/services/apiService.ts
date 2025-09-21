
import axios from 'axios';

export const apiService = {
  getMembers: async () => {
    const response = await axios.get('http://localhost:3000/members');
    return response.data;
  }
};
                