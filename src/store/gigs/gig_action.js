import routes from '@/routes';
const { getAllGigs,addGigs,removeGig, updateGig } = routes();


export const gigActions  = {
    
    loading({ commit }, { type, payload }) {

        let actionType = type
        commit({
            type: actionType,
            credentials: payload
        })
    },

    async fetchAllGigs({ dispatch, commit }, { type, payload }){

        try {
            
            let actionType =  type.split("/")[1]
            dispatch({type: "loading", payload: true}, {root:true});
            const {response: { gigs } } = await getAllGigs(payload);
            
            if(gigs) {

                dispatch({type: "error", payload: null}, {root: true});
                commit({
                    type: actionType,
                    credentials: gigs
                });
                dispatch({type: "loading", payload: false}, {root: true});
            }
        } catch (error) {
            dispatch({type: "loading", payload: false}, {root: true});
            dispatch({type: "error", payload: error.message}, {root: true});
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
            dispatch({type: "loading", payload: false}, { root: true });
        }
        
    },
    async deleteGig({ dispatch,commit }, {type, payload }){
        const id = payload.gigId
        dispatch({type: "loading", payload: true}, {root: true} );
        
        let actionType =  type.split("/")[1]
        
        const {response} = await removeGig(payload);
    
        if(response) {
            
            commit({
                type: actionType,
                credentials: id
            });
            dispatch({type: "loading", payload: false}, { root: true });
        }
        
    },
    async editGig({ dispatch,commit }, {type, payload }){

        dispatch({type: "loading", payload: true}, {root: true} );
        
        let actionType =  type.split("/")[1]
        
        const {response: { data } } = await updateGig(payload);
        
        if(data) {
            
            commit({
                type: actionType,
                credentials: data
            });
            dispatch({type: "editing", payload: false}, { root: true });
            dispatch({type: "loading", payload: false}, { root: true });
        }
        
    },

    singleGig({dispatch,commit}, { type, payload}) {
        if(payload > 0) {

            dispatch({type: "editing", payload: true}, {root: true} );
            let actionType =  type.split("/")[1]
            commit({
                type: actionType,
                credentials: payload
            })
        } else{

            dispatch({type: "editing", payload: false}, {root: true} );
            let actionType =  type.split("/")[1]
            commit({
                type: actionType,
                credentials: payload
            })
        }
    }

};