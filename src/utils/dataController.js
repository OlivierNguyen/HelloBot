import axios from 'axios';
import { SETTINGS } from '/settings';

axios.defaults.baseURL = SETTINGS.API_ROOT;

export const HelloChatCaller = {
    callPromise(method, endpoint, options) {
        const headers = { Authorization: `Token ${SETTINGS.RECAST_API_KEY}` };

        return axios({
            method: method,
            url: endpoint,
            data: options,
            headers,
        });
    },
};
