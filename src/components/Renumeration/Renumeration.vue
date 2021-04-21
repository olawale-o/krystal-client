<template>
    <div class="field">
        <div class="field__row">
            <div class="labels">
                <label for="role">Salary</label>
            </div>
            <div class="inputs">
                <div>
                    <Field type="text" class="input" name="min_salary" placeholder="Minimum" />
                    <ErrorMessage name="min_salary" class="error" as="span" />
                </div>
                <div>
                    <Field type="text" class="input" name="max_salary" placeholder="Maximum" />
                    <ErrorMessage name="max_salary" class="error" as="span"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    
    import { Field, ErrorMessage,  } from 'vee-validate';
    import { computed , ref} from 'vue';
    import {useStore } from 'vuex';
    export default {
        name: 'Renumeration',
        components: { Field, ErrorMessage },
        setup() {


            const store =  useStore()
            const gig = computed(() => store.getters["gigs/gig"]).value
            const min_salary = ref(gig?.min_salary ?? '')
            const max_salary = ref(gig?.max_salary ?? '')
            return{
                
                min_salary,max_salary
            }
        }
    }
</script>

<style src="./Renumeration.css" scoped>

</style>

    