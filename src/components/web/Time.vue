<!--时钟  -->
<script setup>

    setInterval(() => {
        const time = document.querySelector("#time")
            let date = new Date()
            let hours = date.getHours()
            let minutes = date.getMinutes()
            let seconds = date.getSeconds()
          

        time.textContent = hours +":"+ minutes +":"+ seconds
    }, 1000)
</script>


<template>
  <div class="wrapper">
    <div class="display">
        <div id="time">12:00:00</div>
    </div>
    
  </div>
</template>


<style scoped>
   .wrapper {
    height: 80px;
    width: 300px;
    background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
    border-radius: 10px;
    cursor: default;
    animation: animate 1.5s linear infinite;
   }
   .wrapper .display {
    position: absolute;
    
    top: 48%;
    left: 49%;
    transform: translate(-50%, -50%);
    
    z-index: 999;
    /* background: #1b1b1b; */
    height: 85px;
    width: 345px;
    border-radius: 6px;
    text-align: center;
   }
   .wrapper .display #time {
    line-height: 85px;
    color: #fff;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 1px;
    
   }
   @keyframes animate {
    100% {
        filter: hue-rotate(360deg);
    }
   }

</style>