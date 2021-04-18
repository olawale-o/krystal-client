import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { getters } from './global/getters';
import { actions }  from './global/actions';
import { mutations } from './global/mutations';
import { state } from './global/state'
import gigsModule from './gigs';


const store = createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    gigs: gigsModule,
  },
  plugins: [createPersistedState()]
})


export default store
