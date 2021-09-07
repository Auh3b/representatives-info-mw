<template>
    <div class="h-1/2 lg:h-full w-full lg:w-5/6 overflow-x-scroll p-4  shadow-inner">
        <div v-if="data.length > 0 && data.length < 191" class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <MpsListCard :data="mp" v-for="mp in data" :key="mp.name" />
        </div>
        <div v-else class="flex h-full flex-col lg:flex-row items-center justify-center gap-1 lg:gap-10">
            <p class="text-center text-2xl bg-gray-600 p-4 transform lg:-translate-y-32 text-gray-100">Please Select Search Parameter</p>
        </div> 
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name:"MpsListUI",
    computed:{
        ...mapGetters({data: "getFilteredReps"})
    }
}
</script>

<style>

</style>