import axiosInstance from 'axios';

const baseUrl = 'http://3.89.202.205:8081/gamabetting';

export const getEvents = async () => {
    const response = await axiosInstance.get(`${baseUrl}/v1/event-types/1/events`);
    return response.data;
}
