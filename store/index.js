import axios from "~/plugins/axios"

export const state = () => ({
    users: [],
    items: []
})

export const mutations = {
    setIds(state, ids){
        state.ids = ids
    },
    setItems(state, items){
        state.items = items
    }
}

export const actions = {
    async LOAD_ITEMS({commit}, dataUrl){
/*
 / -> topstories.json
 /new -> newstories.json
 /ask -> askstories.json 
*/

        const respone = await axios.get(dataUrl)
        const ids = respone.data
        const tenIds = ids.slice(0,10)

        const itemsPromise = tenIds.map(id => axios.get(`item/${id}.json`))

        const itemsResponses = await Promise.all(itemsPromise)

        const items = itemsResponses.map(res => res.data) 

        const realItems =  items.map(item => item ? item : {
            title: "Failed to load",
            id: 0
        })
        //commit("setIds",ids) 
        commit("setItems",realItems) 
    }
}