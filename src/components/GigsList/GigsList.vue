<template>

    <div class="gigs__tabs">

        <div class="all__gigs">

            <div class="all__gigs-tab-button">
                <span class="gig__text">All gigs</span>
                <button class="btn gig-btn">3404</button>
            </div>

            <div class="filter__sections">
                <button class="btn btn-filter">
                    <span>Freelance</span>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-move'></i>
                        Keywords
                    </span>
                    <i class='bx bxs-chevron-down icon'></i>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-map'></i>
                        Location
                    </span>
                    <i class='bx bxs-chevron-down icon'></i>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-globe'></i>
                        Remote friendly
                    </span>
                </button>
                <button class="btn btn-filter active-filter">
                    <span>
                        <i class='bx bx-palette'></i>
                        Design
                    </span>
                    <i class='bx bx-check icon'></i>
                </button>
                <button class="btn btn-filter">
                    <span>
                        <i class='bx bx-briefcase-alt' ></i>
                        Contract
                    </span>
                </button>
            </div>

            <div class="gigs__table">

                <div class="gigs__table-head">
                    <span></span>
                    <span class="head__text">Role</span>
                    <span class="head__text">Company</span>
                    <span class="head__text">Data <i class='bx bx-sort-alt-2 color-icon'></i></span>
                    <span class="head__text">Salary <i class='bx bx-sort-alt-2 color-icon' ></i></span>
                    <span class="head__text"></span>
                </div>
                <div class="gigs__table-content">
                    <div class="gigs_data">

                        <span>
                            <input type="checkbox" name="" id="">
                        </span>
                        <span class="data__text">
                            Product Designer
                        </span>
                        <span class="data__text">TM 360</span>
                        <span class="data__text">20th, June 2021</span>
                        <span class="data__text">20000 - 30000</span>
                        <button class="btn btn-delete">Delete</button>

                    </div>
                </div>
            </div>


        </div>
    </div>

    
</template>

<script>
    export default {
        name: 'GigsList',
        setup(){

        }
    }
</script>

<style src= "./GigList.css"  scoped>

</style>