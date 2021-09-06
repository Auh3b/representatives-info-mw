<template>
    <div>
            <StatisticsUI :reps="reps"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Statistics",
    computed:{
        ...mapGetters({reps: "getAllReps"})
    }
}
</script>

<style>

</style>