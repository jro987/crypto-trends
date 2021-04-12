<template>
  <div>
    <h3>
      {{ coin.name }}
    </h3>
    <p>{{ coin.symbol }} - ${{ coin.quote.USD.price }}</p>
  </div>
</template>

<script>
export default {
  name: "Coin",
  props: {
    coin: Object,
  },
};
</script>

<style scope>
</style>
