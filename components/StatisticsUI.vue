<template>
  <div class="chart h-full flex flex-col justify-center items-center">
      <select @change="this.$data.setData" v-model="this.$data.selected" name="district" id="district" class="p-4 my-4 border border-gray-300">
        <option value="">Select District</option>
        <option v-for="opt in this.$data.options" :key="opt" :value="opt">{{opt}}</option>
      </select>
      <div class="chart mt-2 flex flex-col items-center">
        <h3 class="bg-gray-800 text-xl text-white text-center p-2">
          Number of MPs Per Party in district
        </h3>
        <svg id="tree" :width="this.$data.width" :height="this.$data.height">
          <g transform="translate(50,50)"> 
            <g class="y-axis">
              <text 
              class="y-axis-label" 
              transform="rotate(-90)" 
              :x="-(this.$data.height-50 )/2"
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

export default {
    name: "StatisticsUI",
    props:["reps"],
    data(){
      return{
        options:[],
        data:[],
        selected:"Lilongwe",
        yLabel:"Number of Representatives",
        width: 500,
        height: 500,
      }
    },
    mounted(){
      this.setOptions(),
      this.genChart(this.data)
    },
    updated(){
      this.genChart(this.data)
    },
    computed:{
      rects(){
        return true
      }
    },
    methods:{
        setOptions(){
            let parties = d3.rollup(this.reps,v=>v.length,d=>d.district,  d=> d.party)

            Array.from(parties, ([key, values])=>{
             this.options.push(key)
             if(key === "Lilongwe"){
                    this.data = Array.from(values)
                  }
            })

            this.options.sort((a,b)=> a < b ? -1 : 1)
        },
        setData(){
          let parties = d3.rollup(this.reps,v=>v.length,d=>d.district,  d=> d.party)
          const district = this.selected
          Array.from(parties, ([key, values])=>{
                  if(key === district){
                    this.data = Array.from(values)
                  }
              })
        },
        genChart(data){
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
          chart.bar(svg, margin,0,1,color,this.selected)
        },
        
        logger(e){
          console.log(this.selected)
        }
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