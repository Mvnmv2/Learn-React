import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "af07c698-1b6b-4593-bc9e-96bcc6b42c29"
    }
})

export const usersAPI = {
    getUsersAPI(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },

    unFollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },

}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => {
            return response.data;
        })
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID);
    },
    updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
    }
}


export const headerAPI = {
    getLogin() {
        return instance.get(`auth/me`)
    },
    //Для логинизации
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}
