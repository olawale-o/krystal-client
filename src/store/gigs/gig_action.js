import routes from '@/routes';
const { getAllGigs,addGigs } = routes();


export const gigActions  = {
    
    loading({ commit }, { type, payload }) {

        let actionType = type
        commit({
            type: actionType,
            credentials: payload
        })
    },

    async fetchAllGigs({ dispatch, commit }, { type, payload }){

        let actionType =  type.split("/")[1]
        dispatch({type: "loading", payload: true}, {root:true});

        
        const {response: { gigs } } = await getAllGigs(payload);
        
        if(gigs) {

            commit({
                type: actionType,
                credentials: gigs
            });
            dispatch({type: "loading", payload: false}, {root: true});
        }
    },

    async newGigs({ dispatch,commit }, {type, payload }){
        
        dispatch({type: "loading", payload: true}, {root: true} );
        
        let actionType =  type.split("/")[1]
        
        const {response: { gigs } } = await addGigs(payload);
        if(gigs) {
            
            commit({
                type: actionType,
                credentials: payload
            });
            dispatch({type, payload: false}, { root: true });
        }
        
    },

};