<template>
  <div :key="coin.id" v-for="coin in coins.data">
    <Coin :coin="coin" />
  </div>
</template>

<script>
import Coin from "./Coin";

export default {
  name: "Coins",
  components: {
    Coin,
  },
  props: {
    coins: Object,
  },
};
</script>

<style scope>
</style>