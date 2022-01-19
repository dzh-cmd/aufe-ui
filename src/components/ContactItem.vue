<template>

  <div id="ct">
      <slot name="ct_flag">
          <img src="@/assets/img/qq.png" alt="">
      </slot>
      <slot name="ct_flag_in">
          <span style="font-size: 20px">QQ群</span>
      </slot>
      <slot name="ct_flag_name">
          <img src="@/assets/img/headBack.jpeg" alt="">
      </slot>
  </div>

</template>
<script>
export default {
  name: "ContactItem"
}
</script>
<style scoped>

#ct{
  width: 150px;
  height: 180px;
  margin-bottom: 30px;
}

#ct > img:first-child {
  height: 35px;
  width: 35px;
  margin-right: 20px;
  vertical-align: middle;
}

#ct > img:last-child {
  height: 100px;
  width: 100px;
  margin: 20px 25px;
}

</style>
