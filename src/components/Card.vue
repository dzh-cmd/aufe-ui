<template>

  <div id="card">
    <img src="@/assets/img/headBack.jpeg" alt="">
    <p id="card_title">
      <slot name="card_title">
        分享你的心情
      </slot>
    </p>
    <p id="card_sign">共有<span style="color: red">1000</span>条话题</p>
  </div>

</template>
<script>
export default {
  name: "Card",
}
</script>
<style scoped>

#card {
  width: 280px;
  background-color: #1b6d85;
  padding-bottom: 30px;
}

#card img {
  width: 100%;
  height: 280px;
}

#card_title{
  text-align: center;
  letter-spacing: 2px;
  font-size: 24px;
  margin-top: 10px;
}

#card_sign{
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}

</style>
