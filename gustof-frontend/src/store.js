import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: "login-layout",
    user: {},
    detailOrders: [],
    orders: [],
    tables: []
  },
  mutations: {
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout;
    },
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_DETAIL_ORDER(state, newDetail) {
      state.detailOrders = newDetail;
    },
    SET_ORDERS(state, newOrder) {
      state.orders = newOrder;
    },
    SET_TABLE(state, newTable) {
      state.tables = newTable;
    }
  },
  actions: {},
  plugins: [vuexLocal.plugin]
});
