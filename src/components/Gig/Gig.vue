<template>
    <div class="gig">
        <Navbar />
        <MastHead @showNewGigForm = "onShowNewGigForm" :isShow="isShow" />
        <NewGig v-if="isShow" @showNewGigForm = "onShowNewGigForm" />
        <GigsList v-if="!isShow"  />

    </div> 
</template>

<script>
    import { ref } from 'vue';
    import Navbar from '@/components/Navbar/Navbar.vue';
    import MastHead from '@/components/MastHead/MastHead.vue';
    import NewGig from '@/components/NewGig/NewGig.vue';
    import GigsList from '@/components/GigsList/GigsList.vue';
    export default {
        name: 'Gig',
        components: { Navbar,MastHead, NewGig, GigsList},
        
        setup() {

            const isShow = ref(false)
            const onShowNewGigForm = () => {
                isShow.value = !isShow.value
            }
            return {
                isShow, onShowNewGigForm
            }
        }
    }
</script>

<style src="./Gig.css" scoped>

</style>