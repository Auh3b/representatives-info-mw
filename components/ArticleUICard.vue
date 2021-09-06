<template>
  <div class="mb-8 p-4 border border-gray-400 flex flex-col">
      <h3 class="pb-2 mb-4 border-b border-gray-800 font-semibold text-lg">{{article.title}}</h3>
      <p class="w-4/5 ml-3 mb-4">{{article.summary}}</p>
      <small class="ml-3 mb-4 text-gray-500">{{article.author}}</small>
      <a :href="article.link" target="_blank" class="ml-3 mb-4 bg-blue-900 text-white py-4 px-2 text-center self-start">Read More</a>
  </div>
</template> 

<script>
export default {
    name:"ArticleUICard",
    props:["article"]
}
</script>

<style>

</style>