<template>
    <div class="gig">
        <Navbar />
        <MastHead />

    </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
import MastHead from '@/components/MastHead/MastHead.vue';
export default {
    name: 'Gig',
    components: { Navbar,MastHead }
}
</script>

<style src="./Gig.css" scoped>

</style>