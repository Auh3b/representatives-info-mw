<template>
<div class="absolute bottom-0 left-0 w-full"> 
    <nav class="h-full flex items-start justify-center">
        <ul class="flex w-full h-full border-t-4 lg:justify-center bg-gray-800 lg:border-0 border-gray-500">
            <li class="w-full lg:w-1/12 flex justify-center p-2 text-white  ">
                <nuxt-link class="text-lg  md:text-3xl" to="/">
                    <font-awesome-layer class="fa-2x">
                        <font-awesome-icon icon="home"/>
                    </font-awesome-layer>
                </nuxt-link>
            </li>
            <li class="w-full lg:w-1/12 flex justify-center p-2 text-white divide-x-4 divide-gray-500">
                <nuxt-link @click.native="this.setRepArticles([])" class="text-lg  md:text-3xl" to="/search">
                    <font-awesome-layer class="fa-2x">
                        <font-awesome-icon icon="search"/>
                    </font-awesome-layer>
                </nuxt-link>
            </li>
            <li class="w-full lg:w-1/12 flex justify-center p-2 text-white divide-x-4 divide-gray-500">
                <nuxt-link class="text-lg  md:text-3xl" to="/statistics">
                    <font-awesome-layer class="fa-2x">
                        <font-awesome-icon icon="chart-pie"/>
                    </font-awesome-layer>
                </nuxt-link>
            </li>
            <li class="w-full lg:w-1/12 flex justify-center p-2 text-white ">
                <nuxt-link  class="text-lg  md:text-3xl" to="/about">
                    <font-awesome-layer class="fa-2x">
                        <font-awesome-icon icon="user" />
                    </font-awesome-layer>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:"NavBar",
    methods:{
        ...mapMutations(["setRepArticles"])
    }
}
</script>

<style>

</style>