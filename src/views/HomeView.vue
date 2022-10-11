<template>
  <div class="root">
    <div class="container">
      <h1 id="h1">Тестирование</h1>

      <div>
        <textarea id="textarea-value" class="body-param_text" v-model="confData">

        </textarea>
      </div>
      <p>
        <button id=p1 @click="start">Start</button>
        <output placeholder="start value">
          {{ startData }}
        </output>
      </p>
      <p>
        <button id=p2 @click="stop">Stop</button>
        <output placeholder="stop value">
          {{ stopData }}
        </output>
      </p>
      <p>
        <button id=p3 @click="getConf">Get configuration</button>

      </p>
      <p>
        <button id=p4 @click="setConf">Set configuration</button>
      </p>

    </div>
  </div>
</template>

<script>
export default {

  name: 'MyMain',
  data() {
    return {
      startData: "",
      stopData: "",
      confData: "",
      status: "",
    }
  },
  methods: {
    async start() {

      await fetch("http://127.0.0.1:5000/run/boat")
          .then(response => {
            return response.json()
          })
          .then((data) => {
            console.log(data);
            alert(data)
          })
          .catch(error => alert(error))
    },
    async stop() {

      await fetch("http://127.0.0.1:5000/stop/boat")
          .then(response => {
            return response.json()
          })
          .then((data) => {
            console.log(data);
            this.swal('Something went wrong.')
          })
          .catch(error => alert(error))

    },
    async getConf() {

      await fetch("http://127.0.0.1:5000/config/boat")
          .then(res => res.json())
          .then(data => {
            this.confData = JSON.stringify(data);
            console.log(JSON.stringify(data));
          })
          .catch(error => alert("Something happened wrong: " + error)
          )
    },
    async setConf() {

      await fetch("http://127.0.0.1:5000/config/boat", {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body:
                JSON.stringify(document.getElementById("textarea-value").value)
          }
      ).then(data => alert("Successful sent"))
          .catch(error => alert("Something happened wrong: " + error))
    }
  }
}
</script>

<style>

#h1 {
  font-family: "HP Simplified Hans";
  text-align: center;
  color: black;
  margin-top: 0%;
  font-size: 30px;
}

#p1 {
  background-color: lightgreen;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 25px;
  margin-top: 5%;
  /*font-family: "HP Simplified Hans";*/
  box-shadow: 5px 5px 5px lightgrey;
}

#p2 {
  background-color: lightcoral;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 25px;
  /*font-family: "HP Simplified Hans";*/
  box-shadow: 5px 5px 5px lightgrey;
}

#p3 {
  background-color: lightblue;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 25px;
  /*font-family: "HP Simplified Hans";*/
  box-shadow: 5px 5px 5px lightgrey;

}

#p4 {
  background-color: lightskyblue;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 15px;
  /*font-family: "HP Simplified Hans";*/
  box-shadow: 5px 5px 5px lightgrey;

}

button {
  margin-left: 15%;
}

.container {
  width: auto;
  height: auto;
  margin: 5%;
}

.body-param_text {
  width: 250px;
  height: 300px;
  border-radius: 6px;
  float: right;
  margin-top: 5%;
  margin-right: 5%;
  box-shadow: 5px 5px 5px lightgrey;
}
</style>