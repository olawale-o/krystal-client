<template>
    <div class="tab-header">
        <div class="all__gigs-tab-button" 
            v-for="tabTitle in tabTitles" :key="tabTitle.title"
            @click="selectedTitle = tabTitle"
            :class = "{'active-tab': selectedTitle.title == tabTitle.title }"
        >
            <span class="gig__text">{{ tabTitle.title  }}</span>
            <button class="btn gig-btn">{{ tabTitle.total }}</button> 
        </div> 
    </div>
    <slot />
</template>

<script>
    import { ref, provide } from "vue";

    export default {
        name: 'Tabs',
        setup(props, { slots }) {
            const tabTitles = ref(slots.default().map(tab => 
            ({   title: tab.props.title, total: tab.props.total }) ));
            const selectedTitle =  ref(tabTitles.value[0]);
            provide('selectedTitle', selectedTitle);
            return {
                tabTitles,
                selectedTitle
            }
        }
    }
</script>