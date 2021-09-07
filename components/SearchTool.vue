<template>
  <div class="w-full lg:w-4/6 my-2 px-4 pt-2 lg:pt-6 flex flex-col justify-start" @keypress="updateMpsList">
      <div class="flex flex-col justify-start mb-4">
          <label for="name" class="text-gray-400 text-lg mb-1">Name:</label>
          <input v-model="searchParam.name" type="text" class="border-b border-gray-800 rounded-none p-1 text-lg focus:outline-none" placeholder="Kondwani Nankhumwa">
      </div>
      <div class="flex flex-col justify-start mb-4">
          <label for="name" class="text-gray-400 text-lg mb-1">District: </label>
          <input v-model="searchParam.district" type="text" class="border-b border-gray-800 rounded-none p-1 text-lg focus:outline-none" placeholder="Lilongwe">
      </div>
      <div class="flex flex-col justify-start mb-4">
          <label for="name" class="text-gray-400 text-lg mb-1">Party: </label>
          <select @change="updateMpsList" v-model="searchParam.party" class="border-b border-gray-800 rounded-none p-1 text-lg focus:outline-none" name="party" id="party">
              <option value="" disabled>Select Party</option>
              <option value="MCP">MCP</option>
              <option value="DPP">DPP</option>
              <option value="UTM">UTM</option>
              <option value="Independent">Independent</option>
              <option value="PP">PP</option>
              <option value="UDF">UDF</option>
              <option value="AFORD">AFORD</option>
          </select>
      </div>

      <button @click="resetSearchParam" type="button" v-if="reset" class="mb-4 bg-gray-800 text-white py-3 px-4 self-end">Reset</button>

  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
export default {
    name: "SearchTool",
    data(){
        return{
            searchParam:{
                name:"",
                district:"",
                party:""
            },
            data: this.$store.getters.getAllReps,
            reset: false,
        }
    },
    computed:{
        ...mapGetters({filtered: "getFilteredReps"})
    },
    methods:{
        ...mapMutations(["setFilteredReps"]),
        logger(element){
            console.log(element)
        },
        updateMpsList(){
            const params = this.searchParam
            
            const filteredReps = this.data
                                .filter(({name}) => params.name.length > 0 ? name.toLowerCase().includes(params.name.toLowerCase()) : name)
                                .filter(({district}) =>  params.district.length > 0 ? district.toLowerCase().includes(params.district.toLowerCase()): district)
                                .filter(({party}) => params.party !== "" ? party === params.party :party)
            this.setFilteredReps(filteredReps)
            this.setBtn()
        },
        resetSearchParam(){
            this.searchParam.name=""
            this.searchParam.district=""
            this.searchParam.party =""
            this.setFilteredReps([])
            this.updateMpsList()
        },
        
        setBtn(){
            this.filtered.length > 0 && this.filtered.length < this.data.length ? this.reset = true : this.reset = false
        },

    }

}
</script>

<style>
    
</style>