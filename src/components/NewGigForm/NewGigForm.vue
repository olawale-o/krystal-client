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
                        <Field type="text" class="input" name="role" />
                        <ErrorMessage name="role" class="error" as="span" />
                    </div>
                    <div>
                        <Field type="text" class="input" name="company" />
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
                        <Field class="input" name="country" as ="select">
                            <option value="">Location</option>
                            <option value="1">Nigeria</option>
                        </Field>
                        <ErrorMessage name="country" class="error" as="span" />
                    </div>
                    <div class="full-width">
                        <Field  class="input" name="region" as="select">
                            <option value="">State/Region</option>
                            <option value="1">Lagos</option>
                            <option value="2">Akure</option>
                            
                        </Field>
                        <ErrorMessage name="region" class="error" as="span" />
                    </div>
                </div>
            </div>
            <div class="field__row">
                <div class="inputs">
                   <div class="full-width">
                        <Field type="text" class="input" name="address" placeholder="Address"  />
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
                        <Field type="text" class="input" name="tags" />
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
    import { Field, ErrorMessage } from 'vee-validate';
    export default {
        components: { Field, ErrorMessage },
        name: 'NewGigForm', 
        setup() {

        }
    }
</script>
<style src="./NewGigForm.css" scoped>

</style>