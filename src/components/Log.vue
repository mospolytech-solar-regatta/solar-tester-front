<template>
  <div id="flat">
    <div id="outer">
      <p>
        <button id="startB">Start</button>
      </p>
      <p>
        <button id="stopB">Stop</button>
      </p>
      <p>
        <button id="exitB">Exit</button>
      </p>
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

  </div>
</template>

<script>

</script>

<style>

#flat {
  background-color: #bceaff;
  border-radius: 15px;
  float: left;
  width: 37%;
  height: 500px;
  margin: 30px 30px 80px;
}

.window {
  margin-top: 20px;
  width: 100%;
  border-radius: 15px;
  height: 85%;
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
  margin-left: -15%;
  float: none;
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

button {
  display: inline-block;
}

#outer {
  text-align: center;
}


</style>