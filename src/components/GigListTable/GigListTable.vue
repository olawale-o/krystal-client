<template>
     <div class="gigs__table">

        <div class="gigs__table-head">
            <span class=""></span>
            <span class="head__text">Role</span>
            <span class="head__text">Company</span>
            <span class="head__text">Data <i class='bx bx-sort-alt-2 color-icon'></i></span>
            <span class="head__text">Salary <i class='bx bx-sort-alt-2 color-icon' ></i></span>
            <span class=""></span>
        </div>
        <div class="gigs__table-content">
            <template v-if="!loading">
                <div class="gigs_data" v-for="gig in gigs" :key="gig.id">
                    <span>
                        <input type="checkbox" @click="$emit('newGigForm', gig.id)" >
                    </span>
                    <span class="data__text">
                        {{ gig.role }}
                    </span>
                    <span class="data__text"> {{ gig.company }} </span>
                    <span class="data__text">{{  gig.created_at }}</span>
                    <span class="data__text">{{ gig.min_salary }} - {{ gig.max_salary }}</span>
                    <button class="btn btn-delete" @click="$emit('deleteGig',gig.id)">Delete</button>
                </div>
            </template>
            
            <div class="loading__container" v-if="loading">
                <div class="loading"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            loading: Boolean,
            gigs: Object
        },
        name: 'GigListTable',

        setup(){
            
        }
    }
</script>

<style>

</style>