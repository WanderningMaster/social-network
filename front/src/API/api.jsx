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
    },
    login(username, passw){
        return instance.post(`auth/login`, {username, passw});
    },
    authMe(){
        return instance.post(`auth/me`);
    }
}
export const UserAPI = {
    getUsers(){
        return instance.get(`api/user`);
    }
}
