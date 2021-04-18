import routes from '@/routes';
const { getAllGigs,addGigs } = routes();


export const gigActions  = {

    async fetchAllGigs({ dispatch, commit }, { type, payload }){

        dispatch({type: 'loading', payload: true}, {root: true });

        let actionType =  type.split("/")[1]
        
        const {response: { gigs } } = await getAllGigs(payload);
        
        commit({
            type: actionType,
            credentials: gigs
        });
        dispatch({type: 'loading', payload: true}, {root: true });
    },

    async newGigs({ dispatch,commit }, {type, payload }){
        
        dispatch({type: 'loading', credentials: true}, {root: true });
        
        let actionType =  type.split("/")[1]
        
        const {response: { gigs } } = await addGigs(payload);
        if(gigs) {
            
            commit({
                type: actionType,
                credentials: payload
            });
        }
        
        dispatch({type: 'loading', credentials: false}, {root: true });
    },

};