import axios from 'axios';



export default function Interceptor() {
    axios.interceptors.request.use(request => {
        // add auth header with jwt if account is logged in and request is to the api url
        /* const account = accountService.accountValue;
        const isLoggedIn = account?.token;
        const isApiUrl = request.url.startsWith(process.env.VUE_APP_API_URL); */

        /* if (isLoggedIn && isApiUrl) {
            request.headers.common.Authorization = `Bearer ${account.token}`;
        } */
        request.headers.common['Access-Control-Allow-Origin'] = '*';
        request.headers.common["Content-Type"] = "application/json",
        request.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization';
        request.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';

        return request;
    });
}