<template>
  <div>
    <button id="starts">Start</button>
    <button id="stops">Stop</button>
    <button id="deletes">Delete</button>
    <textarea class="win">
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

.win {
  float: bottom;
  width: 37%;
  height: 100%;
  background-color: #dddddd;
  padding-top: 5%;
  padding-bottom: 25%;
  border-radius: 10px;
}

#starts {
  float: top;
  width: 30px;
  height: 20px;
  padding-left: 30px;
}

#stops{
  float: top;
  width: 30px;
  height: 20px;
  padding-left: 30px;

}
#deletes{
  float: top;
  width: 30px;
  height: 20px;
  padding-left: 30px;

}

</style>