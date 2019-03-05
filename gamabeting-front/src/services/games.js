import axiosInstance from 'axios';

const baseUrl = 'http://3.89.202.205:8081/gamabetting';
const postUrl = 'http://3.89.202.205:8080/betwin-admin';

export const getEvents = async () => {
    const response = await axiosInstance.get(`${baseUrl}/v1/event-types/1/events`);
    return response.data;
}

export const sendTicket = async (ticket) => {
    const response = await axiosInstance.post(`${postUrl}/api/v1/bet`, ticket);
    return response.data;
}