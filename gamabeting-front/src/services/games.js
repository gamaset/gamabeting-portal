import axiosInstance from 'axios';

// LOCAL
// const postUrl = 'http://localhost:8080/crbets-admin/api';
// const baseUrl = 'http://localhost:8280/crbets/api';

// DEV
// const postUrl = 'http://3.89.202.205:8080/crbets-admin/api';
// const baseUrl = 'http://3.89.202.205:8280/crbets/api';

// PROD
const postUrl = 'http://18.231.188.87:8180/crbets-admin/api';
const baseUrl = 'http://18.231.188.87:8280/crbets/api';


export const getEvents = async (period: string) => {
    const response = await axiosInstance.get(`${baseUrl}/v1/event-types/1/events?period=${period}`);
    return response.data.data;
}

export const sendTicket = async (ticket) => {
    const response = await axiosInstance.post(`${postUrl}/v1/bet`, ticket)
    .catch(function (error) {
        console.log(error.response.data.error);
        if (error.response) {
          throw new Error(error.response.data.error);
        }

      });
    return response.data;
}

export const getEventsDetails = async (competition: string, event: string) => {
    const response = await axiosInstance.get(`${baseUrl}/v1/event-types/1/competitions/${competition}/events/${event}`);
    return response.data;
}

export const getSideBar = async () => {
    const response = await axiosInstance.get(`${baseUrl}/v1/portal/shared/sidebar`);
    return response.data.data;
}