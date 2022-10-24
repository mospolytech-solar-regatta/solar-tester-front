<template>
  <div class="dashboard">
    <div class="row row">
      <div class="flex md6 lg4">
        <logCard name="test3"></logCard>
      </div>
      <div class="flex md6 lg4">
        <logCard name="test"></logCard>
      </div>
      <div class="flex md6 lg4">
        <logCard name="test1"></logCard>
      </div>
      <div class="flex md6 lg4">
        <logCard name="test2"></logCard>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vuestic-ui";
import logCard from './../../../components/logCard/logCard.vue'
const value = ref();
const { init } = useToast();
const host = import.meta.env.VITE_BACKEND_HOST;

async function start() {
  console.log(host);
  let resp = await fetch(host + "/run/boat")
    .catch(error => dangerToast(error.toString()));
  if (resp?.ok) {
    let body = await resp.json();
    successToast(body.toString());
  }
}

async function stop() {

  let resp = await fetch(host + "/stop/boat")
    .catch(error => dangerToast(error.toString()));
  if (resp?.ok) {
    let body = await resp.json();
    successToast(body.toString());
  }
}

async function getConfig() {

  let resp = await fetch(host + "/config/boat")
    .catch(error => dangerToast(error.toString()));
  if (resp?.ok) {
    let body = await resp.json();
    successToast("config acquired");
    value.value = body;
  }
}

async function setConfig() {

  let resp = await fetch(host + "/config/boat", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body:
      JSON.stringify(value.value)
  })
    .catch(error => dangerToast(error.toString()));

  if (resp?.ok) {
    successToast("config updated");
  }
}

function dangerToast(msg: string) {
  init({
    message: msg,
    color: "danger",
    position: "bottom-right"
  });
}

function successToast(msg: string) {
  init({
    message: msg,
    color: "success",
    position: "bottom-right"
  });
}

</script>

<style lang="scss">
.jse-json-node {
  font-size: 19px;
  margin-top: 4px;
}

.row-equal .flex {
  .va-card {
    height: 100%;
  }
}

.dashboard {
  .va-card {
    margin-bottom: 0 !important;

    &__title {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
