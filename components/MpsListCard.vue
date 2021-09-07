<template>
  <nuxt-link @click.native="setRep" :to="'/profile/'+data.name" class="bg-gray-700 rounded-sm text-white mb-4 p-2 flex items-center shadow-lg gap-5">
        <div class="">
            <img class="object-cover w-18 h-18 rounded-full border-2 border-gray-500" :src="data.image" width="100" height="100" alt="profile-image">
        </div>
        <div class="pl-4 border-l border-gray-400">
            <p>Name: {{data.name}}</p>
            <p>Constituency: {{data.constituency}}</p>
            <p>Party: {{data.party}}</p>
        </div>
  </nuxt-link>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'MpsListCard',
    props:["data"],
    methods:{
        ...mapMutations(["setSelectedRep", "setFilteredReps","setLoading"]),
        setRep(){
            this.setSelectedRep(this.data)
            this.setFilteredReps([])
            this.setLoading(true)
        },
    },

}
</script>

<style>

</style>