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
                <NewGigForm v-if="!isNext" @changeIsNext="onChangeIsNext"  />
                <Renumeration v-if="isNext" @submitForm="onSubmitForm"  />
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import Renumeration from '@/components/Renumeration/Renumeration.vue';
    import NewGigForm from '@/components/NewGigForm/NewGigForm.vue';
    export default {
        name: 'NewGig',
        components: {
            NewGigForm,Renumeration
        },
        setup(props, {emit}) {
            const isNext = ref(false);
            const onChangeIsNext = () => {
                isNext.value =  !isNext.value
            }
            const onSubmitForm = () => {

                setTimeout(() => {
                    emit('showNewGigForm')
                }, 5000)
            }
            return {
                isNext,onChangeIsNext,onSubmitForm
            }
        }
    }
</script>

<style src= "./NewGig.css" scoped>

</style>