import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "22be2713-4a82-40c9-a2d7-270334ab5127"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
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
    getUsers(userID) {
        return instance.get(`profile/${userID}`).then(response => {
            return response.data;
        })
    }
}
