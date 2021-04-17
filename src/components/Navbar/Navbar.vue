<template>  
    <header class="header">
        <nav class="nav">
            <div class="nav__left">
                <div class="field">
                    <i class='bx bx-search'></i>
                    <input type="text" name="search" class="input" id="" placeholder="Search">
                </div>
            </div>
            <div class="nav__right">
                <ul class="nav__right-links">
                    <li class="nav__right-link-item">
                        <a href="#" class="nav__right-link">
                            <i class='bx bx-bell' ></i>
                        </a>
                    </li>
                    <li class="nav__right-link-item">
                        <a href="#" class="nav__right-link">
                            <i class='bx bx-envelope' ></i>
                        </a>
                    </li>
                    <li class="nav__right-link-item">
                        <a href="#" class="nav__right-link">
                           <i class='bx bx-cog' ></i>
                        </a>
                    </li>
                </ul>
                <div class="nav__right-logo">
                    <img :src="require('@/assets/profile.png')" alt="Profile">
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
<style src="./Navbar.css" scoped>

</style>