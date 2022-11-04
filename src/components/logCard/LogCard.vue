<template>

  <va-card>
    <va-card-title><h2 style="color: #2c3e50;">{{ message }}</h2></va-card-title>
    <va-card-content>
      <va-scroll-container vertical style="max-height: 300px;">
        <va-list>
          <va-list-item v-for="l in logs" :key="l">
            {{ l }}
          </va-list-item>
        </va-list>
      </va-scroll-container>
    </va-card-content>
    <va-card-actions align="center">
      <va-button-group class="mb-4" size="medium">
        <va-button @click="startLog()">Start</va-button>
        <va-button @click="removeLog(logId)">Remove</va-button>
        <va-button @click="stopLog(message)">Stop</va-button>
      </va-button-group>
    </va-card-actions>
  </va-card>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";

const isLoading = ref(true);
const logs = ref();
const props = defineProps(["message", 'removeLog', 'logId']);

// onMounted(() => {
//   for (let i = 0; i < 50; i++) {
//     logs.value.push(i.toString());
//   }
// });

function startLog(){
  let it = props.message;

}

function stopLog(){

}

</script>

<style scoped>

</style>
