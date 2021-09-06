<template>
<div class="h-full flex flex-col justify-center items-center">
    <div class="">
            <div class="flex justify-center items-center">
                <img class="object-cover w-48 h-48 rounded-full border-2 border-gray-500" :src="rep.image" alt="profile-image">
            </div>
            <div class="text-center">
                <p class="text-gray-600 text-3xl font-semibold">{{rep.name}}</p>
                <p class="text-gray-400 text-2xl font-medium ">{{rep.constituency}}</p>
                <p class="text-gray-500 text-2xl font-medium ">{{rep.party}}</p>
            </div>
    </div>
    <div class="h-1/6 w-11/12 flex items-center justify-between gap-5">
        <router-link class="rounded-sm w-6/12 bg-blue-900 text-lg text-white py-4 px-2 text-center" :to="'/articles/'+rep.name">Latest News</router-link>
        <router-link class="rounded-sm w-6/12 bg-gray-800 text-lg text-white py-4 px-2 text-center" to="/search">Back</router-link>
    </div>
</div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"SelectedMp",
    mounted(){
        
    },
    computed:{
        ...mapGetters({rep: "getSelectedRep"})
    }
    

}
</script>

<style>
</style>