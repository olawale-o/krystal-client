<template>
    <div class="new-gig-form">
        <div class="form">
            <form action="#">
                <div class="field">
                    <div class="field__row">
                        <div class="labels">
                            <label for="role">Role</label>
                            <label for="company">Company</label>
                        </div>
                        <div class="inputs">
                            <div>
                                <input type="text" class="input" name="role">
                            </div>
                            <div>
                                <input type="text" class="input" name="company">
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
                            <div>
                                <input type="text" class="input" name="Country">
                            </div>
                            <div>
                                <input type="text" class="input" name="State/Region">
                            </div>
                        </div>
                    </div>
                    <div class="field__row">
                        <div class="inputs">
                            <input type="text" class="input" name="address" placeholder="Address">
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="field__row">
                        <div class="labels">
                            <label for="add-tags">Add Tags</label>
                        </div>
                        <div class="inputs">
                            <input type="text" class="input" name="address">
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
                <div class="field">
                    <div class="buttons">
                        <button class="btn btn-default">Cancel</button>
                        <button class="btn btn-gig" @click="$emit('changeIsNext')">Continue</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'NewGigForm', 
        setup() {

        }
    }
</script>
<style src="./NewGigForm.css" scoped>

</style>