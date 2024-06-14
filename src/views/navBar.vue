<template>
    <v-app>
        <v-main>
            <div class="w-100  d-flex justify-space-between align-center" id="header1">
                <router-link :to="{ name: 'home' }" class="catalogLink ml-5">
                    <div class="catalogDiv">Home</div>
                </router-link>
                <div class=" w-25 d-flex justify-space-between align-center" id="sidebars">
                    <router-link :to="{ name: 'catalogView' }" class="catalogLink">
                        <div class="catalogDiv">Catalog</div>
                    </router-link>
                    <router-link :to="{ name: 'shoppingCart' }" class="catalogLink">
                        <div class="catalogDiv">Cart</div>
                    </router-link>
                    <router-link :to="{ name: 'loginForm' }" class="catalogLink mr-3">
                        <div class="catalogDiv">Log in</div>
                    </router-link>
                </div>
            </div>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>

</script>

<style lang="scss">
#header1 {
    background: rgba(8, 7, 7, 0.99);
    height: 100px;
    color: white;
    border-bottom: 2px solid rgba(214, 212, 213, 0.63);
}

.catalogLink {
    font-size: 30px;
    text-decoration: none;
    color: white;
}

.catalogDiv {
    width: 150px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.catalogDiv:hover {
    color: white;
    background: rgba(106, 101, 103, 0.63);
}

#sidebars {
    width: 60%;
}
</style>
