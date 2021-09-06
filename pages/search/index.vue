<template>
      <div class="h-full flex flex-col justify-center overflow-y-scroll overflow-x-hidden">
        <div class="h-5/6 flex flex-col lg:flex-row justify-center">
          <SearchTool />
          <MpsListUI />
        </div>
      </div>
</template>

<script>

export default {
    name: "Search",
    props:["mpsList"],
}
</script>

<style>
.search{
  height: 70vh;
  overflow-y: scroll;
}
</style>