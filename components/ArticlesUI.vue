<template>
<div class="relative h-full transform -translate-y-5">
    <h1 v-if="!loading" class=" absolute -top-5 pl-4 bg-gray-500 md:text-center text-white text-md sm:text-lg w-full">{{rep.name}} - Latest News</h1>
    <div class="h-full overflow-y-scroll mb-4">
        <div v-if="loading">
            <Loading />
        </div>
        <div v-else>
            <div v-if="articles.length > 0" class="pt-4 px-6">
                <ArticleUICard :article="item" v-for="item in articles" :key="item.cacheId" class="" />
            </div>
            <div v-else >
                <Alert :msg="noData"/>
            </div>
        </div>
     
        
    </div>
</div>
</template>

<script> 
import { mapGetters } from 'vuex'
import ArticleUICard from "./ArticleUICard.vue"
import Loading from "./Loading.vue"
import Alert from "./Alert.vue"
export default {
    name:"ArticlesUI",
    data(){
        return{
            noData:"No Articles Were Found"
        }
    },
    components:{
        ArticleUICard,
        Loading,
        Alert
    },
    computed:{
        ...mapGetters({articles: "getRepArticles"}),
        ...mapGetters({rep: "getSelectedRep"}),
        ...mapGetters({loading: "getLoading"})
    }
}
</script>

<style>
    
</style>