<template>
    <div div class="all__gigs" v-show="title == selectedTitle">
        <slot />
    </div>
</template>

<script>
    import { inject } from 'vue';
    export default {
        name: 'Tab', 
        inject: [ 'selectedTitle' ],
        props: [ 'title', 'total'],
        setup() {
            const selectedTitle = inject('selectedTitle')
            return {
                selectedTitle
            }
        }
    }
</script>