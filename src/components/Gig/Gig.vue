<template>
    <div class="gig">
        <Navbar />
        <MastHead @showNewGigForm = "onShowNewGigForm" :isShow="isShow" />
        <NewGig v-if="isShow" @showNewGigForm = "onShowNewGigForm" :gig="id" />
        <GigsList v-if="!isShow" @showNewGigForm = "onShowNewGigForm" />

    </div> 
</template>

<script>
    import { ref } from 'vue';
    import { useStore  } from 'vuex';
    import Navbar from '@/components/Navbar/Navbar.vue';
    import MastHead from '@/components/MastHead/MastHead.vue';
    import NewGig from '@/components/NewGig/NewGig.vue';
    import GigsList from '@/components/GigsList/GigsList.vue';
    import { singleGig } from '@/store/gigs/actions/action_creators';
    export default {
        name: 'Gig',
        components: { Navbar,MastHead, NewGig, GigsList},
        
        setup() {
            const store  = useStore();
            const isShow = ref(false)
            const id = ref(null);
            const onShowNewGigForm = (gig) => {
               store.dispatch(singleGig(gig))
               isShow.value = !isShow.value
            }
            return {
                isShow, onShowNewGigForm, id
            }
        }
    }
</script>

<style src="./Gig.css" scoped>

</style>