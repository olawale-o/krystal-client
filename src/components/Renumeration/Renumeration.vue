<template>
    <div class="renumeration">
        <div class="new-gig__form-right">
                <div class="form">
                    <form action="#">
                        <div class="field">
                            <div class="field__row">
                                <div class="labels">
                                    <label for="role">Salary</label>
                                </div>
                               <div class="inputs">
                                    <div>
                                        <input type="text" class="input" name="minimun" placeholder="Minimum">
                                    </div>
                                    <div>
                                        <input type="text" class="input" name="maximum" placeholder="Maximum">
                                    </div>
                               </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="buttons">
                                <button class="btn btn-default">Back</button>
                                <button class="btn btn-gig">Add gig</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
        name: 'Renumeration',
        setup() {

        }
    }
</script>

<style src="./Renumeration.css" scoped>

</style>