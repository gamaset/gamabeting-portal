import axiosInstance from 'axios';

// LOCAL
// const postUrl = 'http://localhost:8080/crbets-admin/api';
// const baseUrl = 'http://localhost:8280/crbets/api';

// DEV
const postUrl = 'http://3.89.202.205:8080/crbets-admin/api';
const baseUrl = 'http://3.89.202.205:8280/crbets/api';

// PROD
// const postUrl = 'http://3.89.202.205:8180/crbets-admin/api';
// const baseUrl = 'http://3.89.202.205:8280/crbets/api';


export const getEvents = async () => {
    const response = await axiosInstance.get(`${baseUrl}/v1/event-types/1/events?period=TODAY`);
    return response.data.data;
}

export const sendTicket = async (ticket) => {
    const response = await axiosInstance.post(`${postUrl}/v1/bet`, ticket);
    return response.data;
}