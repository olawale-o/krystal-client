<template>

    <div class="gigs__tabs">

        <div class="all__gigs">

            <div class="all__gigs-tab-button">
                <span class="gig__text">All gigs</span>
                <button class="btn gig-btn">3404</button> 
            </div>

            <div class="filter__sections">
                <button class="btn btn-filter">
                    <span>Freelance</span>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-move'></i>
                        Keywords
                    </span>
                    <i class='bx bxs-chevron-down icon'></i>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-map'></i>
                        Location
                    </span>
                    <i class='bx bxs-chevron-down icon'></i>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-globe'></i>
                        Remote friendly
                    </span>
                </button>
                <button class="btn btn-filter active-filter">
                    <span>
                        <i class='bx bx-palette'></i>
                        Design
                    </span>
                    <i class='bx bx-check icon'></i>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-briefcase-alt' ></i>
                        Contract
                    </span>
                </button>
            </div>

            <div class="gigs__table">

                <div class="gigs__table-head">
                    <span class=""></span>
                    <span class="head__text">Role</span>
                    <span class="head__text">Company</span>
                    <span class="head__text">Data <i class='bx bx-sort-alt-2 color-icon'></i></span>
                    <span class="head__text">Salary <i class='bx bx-sort-alt-2 color-icon' ></i></span>
                    <span class=""></span>
                </div>
                <div class="gigs__table-content">
                    <template v-if="!loading">
                        <div class="gigs_data" v-for="gig in gigs" :key="gig.id">
                            <span>
                                <input type="checkbox" @click="$emit('showNewGigForm', gig.id)" >
                            </span>
                            <span class="data__text">
                                {{ gig.role }}
                            </span>
                            <span class="data__text"> {{ gig.company }} </span>
                            <span class="data__text">{{  gig.created_at }}</span>
                            <span class="data__text">{{ gig.min_salary }} - {{ gig.max_salary }}</span>
                            <button class="btn btn-delete" @click="deleteAsync(gig.id)">Delete</button>
                        </div>
                    </template>
                    
                    <div class="loading__container" v-if="loading">
                        <div class="loading"></div>
                    </div>
                </div>
            </div>


        </div>
    </div>

    
</template>

<script>
    import { useStore } from 'vuex';
    import { computed, onMounted}  from 'vue';
    import { fetchAllGigs, deleteGig } from '../../store/gigs/actions/action_creators';
    export default {
        name: 'GigsList',
        
        setup(){
            const store  = useStore();
            
            let args = {
                endPoint: "/gigs/all",
                method: 'GET'
            }
            const storeAsync = async () => {
                await store.dispatch(fetchAllGigs(args));
            }
            onMounted(storeAsync)

            const deleteAsync = async (id) => {
                const args = {
                    endPoint: `/gigs/delete/${id}`,
                    method: 'DELETE',
                    gigId: id
                }
                await store.dispatch(deleteGig(args)) 
            }
            
         

            return {
                storeAsync,
                gigs: computed(() => store.getters["gigs/gigs"]),
                loading: computed(() => store.getters.loading),
                deleteAsync,
            }
        }
    }
</script>

<style src= "./GigList.css"  scoped>

</style>