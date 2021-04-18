import  { gigStates } from './gig_state';
import { gigActions } from './gig_action';
import { gigGetters } from './gig_getters';
import { gigsMutations } from './gig_mutation';

const gigsModule = {
    namespaced: true,
    state: gigStates,
    getters: gigGetters,
    actions: gigActions,
    mutations: gigsMutations

};

export default gigsModule;