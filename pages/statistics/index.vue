<template>
    <div class="h-full">
        <client-only>
            <StatisticsUI />
        </client-only>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: "Statistics",
    created(){
        this.setOptionsList()
        this.setChart()
    },
    methods:{
        ...mapMutations({setOptionsList: "chart/setOptions"}),
        ...mapMutations({setChart: "chart/setChartData"})
    }
}
</script>

<style>

</style>