<template>
    <div class="h-full flex flex-col items-center justify-center p-2 text-center overflow-hidden">
        <div class=" mb-6 text-4xl text-gray-800 font-bold">
            <h2 class=""> Get to Know </h2>
            <h2 class="bg-gray-800 text-white py-1 px-2"> Your Representives</h2>
        </div>
        <div class="mb-6 font-medium text-gray-400">
            <p>This application is tailored to help you get to know the elected politicians that represent your interest.</p>
            <p class="text-2xl text-gray-600">Knowledge is Power</p>
        </div>
        <small class="mb-4 text-gray-400">{{formateDate(date)}}</small>

        <router-link class="rounded-sm mb-4 bg-gray-800 text-white py-4 px-2" to="/search">Let's Begin</router-link>
    </div>
</template>

<script>
import {format} from "date-fns"
export default {
    data(){
        return{
            date: new Date()
        }
    },
    methods:{
        formateDate(dateObj){
            return format(dateObj, "dd LLLL, yyyy")
        }
    },
    layout: "home"
}
</script>

<style>

</style>