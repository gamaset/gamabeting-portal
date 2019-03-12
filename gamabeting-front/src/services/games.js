import axiosInstance from 'axios';

// PROD
// const postUrl = 'http://3.89.202.205:8180/betwin-admin';

// DEV
const postUrl = 'http://3.89.202.205:8080/betwin-admin';
const baseUrl = 'http://3.89.202.205:8280/gamabetting';

export const getEvents = async () => {
    const response = await axiosInstance.get(`${baseUrl}/v1/event-types/1/events`);
    return response.data;
}

export const sendTicket = async (ticket) => {
    const response = await axiosInstance.post(`${postUrl}/api/v1/bet`, ticket);
    return response.data;
}