<template>
    <div class="gigs">
        <Sidebar />
        <Gig />
    </div>
    
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Gig from '@/components/Gig/Gig.vue';
export default {
    name: 'Gigs',
    components:{ Sidebar, Gig },

    setup() {
        
    },
}
</script>

<style src="./Gigs.css" scoped>

</style>