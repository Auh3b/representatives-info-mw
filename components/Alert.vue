<template>
<div class="pt-4 px-6 flex flex-col text-gray-400 justify-center items-center">
    <i class="fas fa-exclamation-triangle text-8xl text-yellow-300 my-6"></i>
    <p class="text-4xl text-center font-semibold mb-4">{{msg}}</p>
    <router-link to="/search" class="text-2xl text-gray-600 font-semibold mb-4">try another</router-link>
</div>
</template>

<script>
export default {
    name: "Alert",
    props:["msg"]
}
</script>

<style>

</style>