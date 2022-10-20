<template>
  <v-container id="flat">
    <div>
        <button id="startB"> Start </button>
        <button id="stopB"> Stop </button>
        <button id="exitB"> Delete </button>
    </div>

    <textarea class="window" readonly>
      INFO: 127.0.0.1:49459 - "GET /run/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /stop/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "OPTIONS /config HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "POST /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /run/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /stop/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "OPTIONS /config HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "POST /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /run/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /stop/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "OPTIONS /config HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "POST /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /run/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /stop/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "OPTIONS /config HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "POST /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /run/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /stop/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49459 - "GET /config/boat HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "OPTIONS /config HTTP/1.1" 200 OK
      INFO: 127.0.0.1:49460 - "POST /config/boat HTTP/1.1" 200 OK
    </textarea>

  </v-container>
</template>

<script>

</script>

<style>

#flat {

  background-color: #bceaff;
  border-radius: 15px;
  float: left;
  width: 550px;
  height: 500px;
  margin: 30px 30px 30px;
  font-family: Tahoma;

}

.window {

  margin-top: 1%;
  width: 100%;
  border-radius: 15px;
  height: 88%;
  resize: none;

}

#startB {

  float: left;
  margin: 2%;
  background-color: lightgreen;
  padding: 6px 24px;
  border-radius: 6px;
  box-shadow: 3px 3px 3px black;

}

#startB:hover {
  background-color: #72ff00;
}

#stopB {

  float: none;
  margin-left: 23%;
  margin-top: 2%;
  background-color: lightyellow;
  padding: 6px 24px;
  border-radius: 6px;
  box-shadow: 3px 3px 3px black;

}

#stopB:hover {
  background-color: #ffed00;
}

#exitB {
  float: right;
  margin: 2%;
  background-color: lightcoral;
  padding: 6px 24px;
  border-radius: 6px;
  box-shadow: 3px 3px 3px black;

}

#exitB:hover {
  background-color: #ff3a38;
}


</style>