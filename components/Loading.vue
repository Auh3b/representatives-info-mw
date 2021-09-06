<template>
    <div class="w-1/2 transform translate-y-64 m-auto relative" >
        <p class="p-4 bg-gray-800 text-white text-center">Loading...</p>
        <span class="dot w-3 h-3 rounded-full bg-gray-300 opacity-75 animate-ping absolute -top-1 -right-1"></span>
        <span class="dot w-3 h-3 rounded-full bg-gray-200 absolute -top-1 -right-1"></span>
    </div>
</template>

<script>
export default {
    name: "Loading",
}
</script>

<style>

</style>