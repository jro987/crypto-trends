<template>
  <div>
    <h1>Trends</h1>
    <Coins :coins="coins" />
  </div>
</template>

<script>
import Coins from "../components/Coins";
export default {
  name: "Home",
  components: {
    Coins,
  },
  props: {
    coins: Object,
  },
};
</script>

<style scoped>
div {
  width: 100%;
  background-color: #fff;
  padding: 20px 0;
}
</style>
