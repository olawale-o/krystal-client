<template>
    <form @submit="onSubmit">
        <slot />
         <div class="field">
            <div class="buttons">
                <button class="btn btn-default" v-if="hasPrevious && !loading" @click="goToPrev">Back</button>
                <button class="btn btn-default" type="button" v-if="!hasPrevious" @click="$emit('hideForm')">Cancel</button>
                <button class="btn btn-gig" type="submit" v-if="!loading">{{ isLastStep ? (editing ? 'Update gig' : 'Add gig') : 'Continue'  }}</button>
                <div class="loading__contaiiner" v-if="loading">
                    <div class="loading"></div>
                </div>
            </div>
        </div>
    </form>
</template>


<script>
    import { ref, computed, toRefs} from 'vue';
    import { useForm } from 'vee-validate';
    import { useStore } from 'vuex';
    import { injectWrapper } from '@/provideInject';


    export default { 
        name: 'FormWizard',
        emits: ["next", "submit", "hideForm"],
        props: {
            validationSchema: {
                type: null,
                required: true
            },
            initialValues: {
                company: String,
                role: String,
                country: String,
                region: String,
                address: String,
                tags: String,
                min_salary: String,
                max_salary: String
            }
        },
        setup(props, {emit}) {
            const store =  useStore()
            const formData = ref({});
           const {  initialValues} = toRefs(props)
            
            const currentStepIdx = injectWrapper('CURRENT_STEP_INDEX');
            const stepCounter = injectWrapper('STEP_COUNTER');
            const updateCounter  = injectWrapper('UPDATE_COUNTER');

            const currentSchema = computed(() => {
              return props.validationSchema[currentStepIdx.value];
            });

            const { resetForm, handleSubmit } = useForm({ validationSchema: currentSchema, initialValues  });
            
            const isLastStep = computed(() => {
                return currentStepIdx.value === stepCounter.value -  1;
            })
            const hasPrevious =  computed(() => {
                return currentStepIdx.value > 0;
            });
            
            const goToPrev = () => {
                if(currentStepIdx.value === 0) {
                  return;
                }
                currentStepIdx.value--;
                resetForm({
                  values: {
                  ...formData.value,
                  },
                });
            }
            
            const onSubmit = handleSubmit((values) => {
                console.log('wale');
                formData.value = {
                    ...formData.value,
                    ...values,
                };

                resetForm({
                    values: {
                        ...formData.value
                    }
                });


                if(!isLastStep.value) {
                    
                    updateCounter();
                    emit("next", formData.value);
                    return;
                }
                
                emit("submit", formData.value);
            });

            return {
                onSubmit,isLastStep,hasPrevious,goToPrev,
                loading: computed(() => store.getters.loading),
                editing: computed(() => store.getters.editing),
            }
        }
    }
</script>

<style>

</style>
