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
          .catch(error => this.alert(error))
    },
    async stop() {

      await fetch("http://127.0.0.1:5000/stop/boat")
          .then(response => {
            return response.json()
          })
          .then((data) => {
            console.log(data);
            alert(data)
          })
          .catch(error => this.alert(error))

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
      ).then(alert("Successful sent"))
          .catch(error => alert("Something happened wrong: " + error))
    }
  }
}
</script>

<style>

#h1 {
  font-family: "HP Simplified Hans";
  text-align: center;
  color: aliceblue;
  padding-bottom: 35px;
  font-size: 30px;
}

#p1 {
  background-color: lightgreen;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 25px;
  font-family: "HP Simplified Hans";
  box-shadow: 5px 5px 5px lightgrey;


}

#p2 {
  background-color: lightcoral;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 25px;
  font-family: "HP Simplified Hans";
  box-shadow: 5px 5px 5px lightgrey;


}

#p3 {
  background-color: lightblue;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 25px;
  font-family: "HP Simplified Hans";
  box-shadow: 5px 5px 5px lightgrey;

}

#p4 {
  background-color: lightskyblue;
  border-radius: 6px;
  font-size: 20px;
  padding: 6px 24px;
  margin-bottom: 15px;
  font-family: "HP Simplified Hans";
  box-shadow: 5px 5px 5px lightgrey;

}


output {
  background-color: ghostwhite;
  margin-left: 30px;
  padding: 6px 24px;
  border-radius: 6px;
  border-color: red;
  font-size: 20px;
}

input {
  background-color: ghostwhite;
  margin-left: 50px;
  padding: 6px 24px;
  border-radius: 6px;
  border-color: red;
  font-size: 20px;
}

.container {
  width: auto;
  height: auto;
  border-radius: 30px;
  padding: 30px;
  margin: 5%;
  /*background: rgb(60, 90, 200);*/
}

.body-param_text {
  width: 250px;
  height: 300px;
  border-radius: 6px;
  float: right;
  margin-top: -30px;
  box-shadow: 5px 5px 5px lightgrey;
}
</style>