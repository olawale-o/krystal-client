<template>

    <div class="form">
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
    </div>

</template>

<script>
    import { Field , ErrorMessage} from 'vee-validate';
    export default {
        name: 'Renumeration',
        components: { Field, ErrorMessage },
        setup() {

        }
    }
</script>

<style src="./Renumeration.css" scoped>

</style>