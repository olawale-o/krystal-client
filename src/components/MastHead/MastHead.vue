<template>
    <div class="masthead">
        <h4 class="page">
            Gigs
        </h4>
        <button class="btn btn-gig" @click="$emit('showNewGigForm')" v-if="!isShow">
            <span>New gig</span>
            <i class='bx bx-plus'></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'MastHead',
          props: {
            isShow: Boolean
        },
        setup() {

        }
    }
</script>

<style src="./MastHead.css" scoped>

</style>