<template>
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
    <GigListTable
        :gigs="gigs" 
        :loading="loading" 
        :error="error" 
        @deleteGig="deleteAsync"
        @newGigForm="showNewGigForm"
    />
</template>

<script>
    import { computed, onMounted,}  from 'vue';
    import { useStore } from 'vuex';
    import { fetchAllGigs, deleteGig } from '@/store/gigs/actions/action_creators';
    import GigListTable  from '@/components/GigListTable/GigListTable';
    export default {
        name: 'AllGigs',
        components: {GigListTable},
        emits: ['showNewGigForm'],

        setup(props,{ emit }) {

            const store  = useStore();
           
            let args = {
                endPoint: "/gigs/all",
                method: 'GET'
            }
            const storeAsync = async () => {
                await store.dispatch(fetchAllGigs(args));
            }
            const deleteAsync = async (id) => {
                const args = {
                    endPoint: `/gigs/delete/${id}`,
                    method: 'DELETE',
                    gigId: id
                }
                await store.dispatch(deleteGig(args)) 
            }

            const showNewGigForm = (gig) => {
                emit('showNewGigForm', gig)
            }
            
            onMounted(() => {
                
                storeAsync()
            })

            return {
                storeAsync,deleteAsync,
                gigs: computed(() => store.getters["gigs/gigs"]),
                loading: computed(() => store.getters.loading),
                error: computed(() => store.getters.error),
                showNewGigForm,
            }
        }
    }
</script>