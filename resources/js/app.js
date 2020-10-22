require("./bootstrap");

import VueRouter from "vue-router";
import Vuex from 'vuex';
import Index from "./Index";
import router from "./routes";
import storeDefinition from "./store";
import ValidationErrors from "./shared/components/ValidationErrors";


window.Vue = require("vue");
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeDefinition);

window.axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (401 === error.response.status) {
            store.dispatch("logout");
        }
        return Promise.reject(error);
    }
);

Vue.component("v-errors", ValidationErrors);

const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        index: Index
    },
    async beforeCreate() {
        this.$store.dispatch("loadUser");
    },
});
