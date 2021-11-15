import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8000/`,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

export const AuthAPI = {
    reg(username, passw) {
        return instance.post(`api/user`, {username, passw});
    }
}
