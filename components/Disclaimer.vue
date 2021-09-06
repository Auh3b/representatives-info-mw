<template>
  <div v-show="show" class="bg-red-200 text-red-500 p-4 w-full absolute bottom-10 z-50">
      <p class="text-sm">
          This developers of this application are impartial and are in noway taking the side of any political party other than siding with the <span class="text-red-800">People of Malawi</span>  by making information available to them as is their right. The list of Representatives is based on the MP electral results of <span class="text-red-800">May, 2019</span> and may not reflect the full current composition of the Malawi Legislature. We will be updating as information comes more available.
      </p>
      <button @click="removeDisclaimer" class="absolute -top-1 -right-1 text-white rounded-full w-5 h-5 bg-red-500 shadow flex justify-center items-center">X</button>
  </div>
</template>

<script>
export default {
    name:"Disclaimer",
    data(){
        return{
            show:true
        }
    },
    methods:{
        removeDisclaimer(){
            this.show = !this.show
        }
    }
}
</script>

<style>

</style>