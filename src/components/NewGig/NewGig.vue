<template>
    <div class="new-gig">
        <h6 class="page">New gig</h6>
        <div class="new-gig__form">
            <div class="new-gig__left">
                <div class="new-gig__left-item">
                    <h6>Basic Data</h6>
                </div>
                <div class="new-gig__left-item">
                    <h6>Renumeration</h6>
                </div>
            </div>
            <div class="new-gig__form-right">
                <NewGigForm />
            </div>
        </div>
    </div>
</template>

<script>
//import Renumeration from '@/components/Renumeration/Renumeration.vue';
import NewGigForm from '@/components/NewGigForm/NewGigForm.vue';
export default {
    name: 'NewGig',
    components: {
        NewGigForm
    },
    setup() {

    }
}
</script>

<style src= "./NewGig.css" scoped>

</style>