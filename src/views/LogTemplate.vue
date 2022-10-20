<template>
  <div>
    <button id="add" @click="add">+</button>
    <Log v-for="(item, index) in items"
         :item="item"
         :index="index"
         :key="item.id"></Log>
  </div>
</template>

<script>

import Log from '../components/Log.vue'

export default {
  name: "LogTemplate",
  components: {
    'Log': Log
  },

  data() {
    return {
      currentIndex: 2,
      items: [(1, Log)]
    }
  },

  methods: {
    add() {
      this.items.push(this.currentIndex);
      this.currentIndex++;
    },
    delete(key){
      this.items.pop(this.items.map(key));
    }
  }
}


</script>

<style>
#add {
  float: right;
  margin-left: 0%;
  background-color: lightgreen;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  box-shadow: 5px 5px 5px lightgrey;
}

#add:hover {
  background-color: #72ff00;
}

div{
  font-family: Tahoma;
}
</style>