<template>
    <div class="gig">
        <Navbar />
        <MastHead />
        <NewGig />

    </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
import MastHead from '@/components/MastHead/MastHead.vue';
import NewGig from '@/components/NewGig/NewGig.vue';
export default {
    name: 'Gig',
    components: { Navbar,MastHead, NewGig}
}
</script>

<style src="./Gig.css" scoped>

</style>