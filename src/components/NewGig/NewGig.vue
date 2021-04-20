<template>
    <div class="new-gig">
        <h6 class="page">New gig</h6>
        <div class="new-gig__form">
            <div class="new-gig__left">
                <div>
                    <div class="new-gig__left-item" :class="{'active-trend': currentStepIdx == 0}">
                        <h6 >Basic Data  </h6>
                    </div>
                    <div class="new-gig__left-item" :class="{'active-trend': currentStepIdx > 0}">
                        <h6>Renumeration</h6>
                    </div>
                </div>
                
            </div>
            <div class="new-gig__form-right">
                <FormWizard 
                    :validation-schema="validationSchema" 
                    @submit="onSubmit" @hideForm="onHideForm"
                    :initial-values="initialFormValues"
                >
                    <FormStep>
                        <NewGigForm  />
                    </FormStep>
                    <FormStep>
                        
                        <Renumeration  />
                    </FormStep>
                </FormWizard>
            </div>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    import { validationSchema, initialValues } from '@/schema';
    import FormStep from '@/components/FormStep.vue';
    import {provideWrapper} from '@/provideInject';
    import FormWizard from '@/components/FormWizard.vue';
    import {  ref, computed} from 'vue';
    import Renumeration from '@/components/Renumeration/Renumeration.vue';
    import NewGigForm from '@/components/NewGigForm/NewGigForm.vue';
    import { newGigs , editGig } from '@/store/gigs/actions/action_creators';
   
    
    export default {
        name: 'NewGig',
        props: ["gig"],
        components: {
            NewGigForm,Renumeration,FormStep,FormWizard
        },
        setup(props, {emit}) {
            const store  = useStore();
            
            
            const isNext = ref(false);
            const currentStepIdx = ref(0);
            const stepCounter =  ref(0);
            const loading = computed(() => store.getters.loading)
            const editing = computed(() => store.getters.editing)
            const gig = computed(() => store.getters["gigs/gig"])
            const initialFormValues  = computed(() => store.getters["gigs/gig"] ).value ? 
            computed(() => store.getters["gigs/gig"] ) : initialValues
            
            const updateCounter = () => {
                currentStepIdx.value++;
            }
            const onChangeIsNext = () => {
                isNext.value =  !isNext.value
            }
            const onHideForm = () => {
                currentStepIdx.value = 0
                stepCounter.value = 0
                emit('showNewGigForm')
            };
       
            const onSubmit = async(formData) => {
                const user = 1;
                           
                const {
                    role, 
                    tags, address,company, min_salary,max_salary,region
                } =  formData
    
                const data = {
                    role, tags, address,company, region, min_salary,max_salary,user
                }
                const args = editing.value ? {
                    endPoint: `/gigs/update/${gig.value.id}`,
                    method: "PUT",
                    body: data
                } :  {
                    endPoint: "/new-gig",
                    method: "POST",
                    body: data
                }
                
                editing.value ? await store.dispatch(editGig(args)) : await store.dispatch(newGigs(args))
                
                if(loading.value){
                    
                    onHideForm()
                }
                
            }

            /**  PROVIDERS */
           
            provideWrapper("STEP_COUNTER", stepCounter);
            provideWrapper("CURRENT_STEP_INDEX", currentStepIdx);
    
            provideWrapper("UPDATE_COUNTER", updateCounter);


            return {
                isNext,
                onChangeIsNext,
                onHideForm,
                validationSchema,
                onSubmit,
                currentStepIdx,
                initialFormValues
            }
        }
    }
</script>

<style src= "./NewGig.css" scoped>

</style>