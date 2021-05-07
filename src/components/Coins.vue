<template>
  <div :key="coin.id" v-for="coin in coins">
    <Coin :coin="coin" @add-coin="$emit('add-coin', coin.id)" />
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