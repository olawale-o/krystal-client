<template>
    <div class="form">
        <div class="field">
            <div class="field__row">
                <div class="labels">
                    <label for="role">Role</label>
                    <label for="company">Company</label>
                </div>
                <div class="inputs">
                    <div>
                        <Field type="text" class="input" name="role" :value="role" />
                        <ErrorMessage name="role" class="error" as="span" />
                    </div>
                    <div>
                        <Field type="text" class="input" name="company" :value="company" />
                        <ErrorMessage name="company" class="error" as="span" />
                    </div>
                </div>
            </div>
        </div>
        
        <div class="field">
            <div class="field__row">
                <div class="labels">
                    <label for="">Location</label>
                </div>
                <div class="inputs">
                    <div class="full-width">
                        <Field class="input" name="country" as ="select" v-model="location">
                            <option :value="''">Location</option>
                            <option :value="'1'">Nigeria</option>
                        </Field>
                        <ErrorMessage name="country" class="error" as="span" />
                    </div>
                    <div class="full-width">
                        
                        <Field class="input" name="region" as="select" v-model="region">
                            <option value="">State/Region</option>
                            <option v-for="option in states" 
                            :value="option.id" :key="option.id" >{{option.name}}</option>
                                                    
                        </Field>
                        <ErrorMessage name="region" class="error" as="span" />
                    </div>
                </div>
            </div>
            <div class="field__row">
                <div class="inputs">
                   <div class="full-width">
                        <Field type="text" class="input" name="address" placeholder="Address" :value="address"  />
                        <ErrorMessage name="address" class="error" as="span"/>
                   </div>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="field__row">
                <div class="labels">
                    <label for="add-tags">Add Tags</label>
                </div>
                <div class="inputs">
                    <div class="full-width">
                        <Field type="text" class="input" name="tags" :value="tags" />
                        <ErrorMessage name="tags" class="error" as="span" />
                    </div>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="links">
                <span>Suggested links:</span>
                <a href="#">full time</a>
                <a href="#">Contract</a>
                <a href="#">freelance</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { Field, ErrorMessage,  } from 'vee-validate';
    import { computed , ref} from 'vue';
    import {useStore } from 'vuex';
    export default {
        components: { Field, ErrorMessage },
        name: 'NewGigForm', 
        setup() {

            const states = [{id: 1, name:'Lagos'}, {id:2, name: "Akure"}]
            const store =  useStore()
            const gig = computed(() => store.getters["gigs/gig"]).value
            const role = ref(gig?.role ?? '')
            const company = ref(gig?.company ?? '')
            const address = ref(gig?.address ?? '')
            const tags = ref(gig?.tags ?? '')
            const region = ref(gig?.region ?? '')
            const location = ref(gig?.country?.id ?? '')
            return{
                
                region,location,role,company, address,tags,states
            }
        }
    }
</script>
<style src="./NewGigForm.css" scoped>

</style>