import { reqCategoryList } from "@/api";

const state = {
    categoryList: []
};
const actions = {
    async categoryList(context) {
        let res = await reqCategoryList();
        if (res.code == 200) {
            context.commit("CATEGORYLIST", res.data);
        }
    }
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}