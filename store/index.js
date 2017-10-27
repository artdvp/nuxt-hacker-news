import axios from "~/plugins/axios"

export const state = () => ({
    users: [
        {
            id: 0,
            login: "john"
        }
    ]
})

export const mutations = {
    setUsers(state, users){
        state.users = users
    }
}

export const actions = {
    async nuxtServerInit({commit}){
        const respone = await axios.get("users")
        const users = respone.data
        commit("setUsers",users) 
    }
}