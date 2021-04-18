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
                    <span></span>
                    <span class="head__text">Role</span>
                    <span class="head__text">Company</span>
                    <span class="head__text">Data <i class='bx bx-sort-alt-2 color-icon'></i></span>
                    <span class="head__text">Salary <i class='bx bx-sort-alt-2 color-icon' ></i></span>
                    <span class="head__text"></span>
                </div>
                <div class="gigs__table-content">
                    <template v-if="!loading">
                        <div class="gigs_data" v-for="gig in gigs" :key="gig.id">
                            <span>
                                <input type="checkbox" name="" id="">
                            </span>
                            <span class="data__text">
                                {{ gig.role }}
                            </span>
                            <span class="data__text"> {{ gig.company }} </span>
                            <span class="data__text">20th, June 2021</span>
                            <span class="data__text">{{ gig.min_salary }} - {{ gig.max_salary }}</span>
                            <button class="btn btn-delete">Delete</button>
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
    import { computed, onMounted }  from 'vue';
    import { fetchAllGigs } from '../../store/gigs/actions/action_creators';
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

            return {
                storeAsync,
                gigs: computed(() => store.getters["gigs/gigs"]),
                loading: computed(() => store.getters.loading),
            }
        }
    }
</script>

<style src= "./GigList.css"  scoped>

</style>