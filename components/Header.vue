<template>
  <div class=" w-full">
    <header class="p-2 mb-1 lg:mb-4 bg-gray-800 w-full text-white flex items-center justify-between shadow-md gap-5">
        <h1 class="text-lg md:text-3xl"> Know Your Representative</h1>
        <div class="hidden sm:block">
          <ul class="flex">
            <li class="mx-4">
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </li >
            <li class="mx-4">
              <nuxt-link to="/search">
                Search
              </nuxt-link>
            </li>
            <li class="mx-4">
              <nuxt-link to="/statistics">
                Statistics
              </nuxt-link>
            </li>
            <li class="mx-4">
              <nuxt-link to="/about">
                About
              </nuxt-link>
            </li>
          </ul>
        </div>
    </header>
  </div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style>
   
</style>