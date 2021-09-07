<template>
    <div class="h-full w-full flex flex-col justify-end sm:justify-center overflow-y-scroll overflow-x-hidden">
        <div class="h-5/6">
            <ArticlesUI/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Articles",
    created(){
        this.setRepArticles(this.rep)
    },
    methods:{
        ...mapActions(["setRepArticles"]),
    },
    computed:{
        ...mapGetters({rep: "getSelectedRep"})

    }
}
</script>

<style>
*::-webkit-scrollbar{
    width: 0px;
}
</style>