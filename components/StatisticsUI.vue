<template>
  <div class="chart h-full flex flex-col justify-start items-center">
      <select @change="updateChart" v-model="xValue" name="district" id="district" class="p-4 my-4 border border-gray-300">
        <option value="">Select District</option>
        <option v-for="(opt, index) in this.options" :key="index" :value="opt">{{opt}}</option>
      </select>
      <div class="chart mt-0 sm:mt-2 flex flex-col items-center">
        <h3 class="bg-gray-800 text-xl text-white text-center p-2">
          Number of MPs Per Party in district
        </h3>
        <svg id="tree" :width="width" :height="height">
          <g transform="translate(70,30)"> 
            <g class="y-axis">
              <text 
              class="y-axis-label" 
              transform="rotate(-90)" 
              :x="-(height-50 )/2"
              y=-30
              text-anchor="middle"
              >
              {{this.$data.yLabel}}
              </text>
            </g>
            <g class="x-axis"></g>
          </g>
        </svg>
      </div>
  </div>
</template>

<script>
import * as d3 from "d3"
import Chart from "../assets/javascript/Chart"
import {mapMutations } from "vuex"

export default {
    name: "StatisticsUI",
    data(){
      return{
        xValue:"",
        yLabel:"Number of Representatives",
        height: 400,
      }
    },
    mounted(){
      this.genChart(this.mps, this.selected)
    },
    updated(){
      this.genChart(this.mps, this.selected)
    },
    computed:{
      mps(){
        return this.$store.state.chart.chartData
      },
      options(){
        return this.$store.state.chart.options
      },
      selected(){
        return this.$store.state.chart.selectedDistrict
      },
      width(){
        return process.client ? window.innerWidth : 300
      }
    },
    methods:{
      ...mapMutations(["chart/setSelectedDistrict","chart/setChartData"]),

      updateChart(){
        this['chart/setSelectedDistrict'](this.xValue)
        this['chart/setChartData']()
      },

        genChart: (data,selected)=> {
          const svg = d3.select("svg")
          const margin ={left: 50, right:50, top:50, bottom:50}
          
          // COLORIZER FUNCTION
          const color = (d) =>{
            return d[0] === "MCP" ? "hsl(0, 40%, 70%)":
                    d[0] === "DPP" ? "hsl(200, 40%, 70%)":
                    d[0] === "UDF" ? "hsl(58, 40%, 70%)":
                    d[0] === "UTM" ? "hsl(0, 70%, 30%)":
                    d[0] === "PP" ? "hsl(20, 40%, 70%)":
                    d[0] === "AFORD" ? "hsl(250, 40%, 70%)":
                    "hsl(130, 40%, 70%)"

          }

          const chart = new Chart(data)
          chart.bar(svg, margin,0,1,color, selected)
        },
    }
}
</script>

<style>
.x-axis-label,.y-axis-label,.chart-title{
  font-size: 2em;
  font-weight: 800;
  fill: hsl(0, 0%, 60%);
}
.chart-title{
  font-size: 1em;
}

.tick text{
  font-size: 1.4em;
}
</style>