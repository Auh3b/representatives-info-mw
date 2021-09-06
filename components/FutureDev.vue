<template>
  <section class="w-5/6 lg:w-1/2 text-center py-4 px-4 border border-gray-500">
      <h4 class="text-gray-800 text-2xl font-semibold">What to look out for...</h4>
      <div class="pl-2">
          <p class="text-gray-700 text-lg font-medium">Planned</p>
          <ul v-for="item in planned" :key="item.id" class="flex gap-5 items-center justify-center">
              <li class="text-gray-500">{{item.task}}</li>
          </ul>
      </div>
      <div class="pl-2">
          <p class="text-gray-700 text-lg font-medium">Completed</p>
           <ul v-for="item in completed" :key="item.id" class="flex gap-5 items-center justify-center">
              <li class="text-gray-500 italic line-through">{{item.task}} <i class="text-green-600 fas fa-check"></i></li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    name:"FutureDev",
    data(){
        return{
            planned:[
                {
                    id: `${Math.floor(Math.random())}`,
                    task: "Add More Contact Detail",
                    date: ""
                },
                {
                    id: `${Math.floor(Math.random())}`,
                    task: "Add location proximity search",
                    date: ""
                },
                {
                    id: `${Math.floor(Math.random())}`,
                    task: "Add local councillors",
                    date: ""
                }, 
            ],
            completed:[
                {
                    id: `${Math.floor(Math.random())}`,
                    task: "Create web app for MP look-up",
                    date: `${(new Date).getMonth()}/ ${(new Date).getFullYear()}`
                },
                {
                    id: `${Math.floor(Math.random())}`,
                    task: "Add Statistical Information",
                    date: ""
                }, 
            ]
        }
    }
}
</script>

<style>
    .dev{
        background: hsl(225, 30%, 80%);
        color: hsl(225, 30%, 50%);
        width: 50%;
        padding: 1.5rem;
        margin: 1rem 0;
        margin-left: 1rem;
    }
    .dev .subtitle{
        font-weight: 500;
        font-size: 1.2em;
    }

    .dev hr{
        border: none;
        width: 50%;
        border-top: 1px solid hsl(225, 30%, 50%);
    }

    .dev .dev-items{
        padding: 0.5rem 1.5rem;
    }

    .dev .item{
        display: flex;
        align-items: flex-start;
        margin: 5px 0;

    }

    .dev .item .tick{
        width: 5px;
        height: 5px;
        margin-top: 7px;
        margin-right: 0.6rem;
        border-radius: 50%;
        background: hsl(225, 30%, 50%);
    }

    .completed .text{
        text-decoration: line-through;
        
    }

    .completed .content{
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
    }

    @media (max-width: 960px) {
        .dev{
            width: 95%;
            margin: 0 auto;
            padding: 0.5rem;
        }
    }
</style>