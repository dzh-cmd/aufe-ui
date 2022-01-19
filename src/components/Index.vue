<template>

  <div id="index">
    <HeadPart />
    <ContentCard />
  </div>

</template>

<script>

import HeadPart from "@/components/HeadPart";
import ContentCard from "@/components/ContentCard";

export default {
  name: "Index",
  components: {
    HeadPart,ContentCard,
  }
}
</script>
<style scoped>
</style>
