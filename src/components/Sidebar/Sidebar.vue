<template>
    <div class="sidebar">
        <div class="sidebar__top">

            <div class="sidebar__top-logo">
                <img :src="require('@/assets/logo.svg')" alt="logo" >
            </div>

        </div>
        <div class="sidebar__bottom">
            <ul class="sidebar__bottom-links">
                <li class="sidebar__bottom-link-item">
                    <i class='bx bx-home'></i>
                    <a href="#" class="sidebar__bottom-link">
                        Dashboard
                    </a>
                </li>
                <li class="sidebar__bottom-link-item">
                   <i class='bx bxs-briefcase-alt active' ></i>
                    <a href="#" class="sidebar__bottom-link active">Gigs</a>
                </li>
                <li class="sidebar__bottom-link-item">
                    <i class='bx bxs-note'></i>
                    <a href="#" class="sidebar__bottom-link">Company</a>
                </li>
                <li class="sidebar__bottom-link-item">
                    <i class='bx bxs-user'></i>
                    <a href="#" class="sidebar__bottom-link">Account</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style src="./Sidebar.css" scoped>

</style>