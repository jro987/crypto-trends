<template>
  <div>
    <h3>
      {{ coin.name }} - {{ coin.symbol }} - ${{
        formatCurrency(coin.quote.USD.price)
      }}
    </h3>
    <p>
      24H:
      <span :class="percentClass(coin.quote.USD.percent_change_24h)">{{
        roundPercent(coin.quote.USD.percent_change_24h)
      }}</span
      >&nbsp;&nbsp;7D:
      <span :class="percentClass(coin.quote.USD.percent_change_7d)">{{
        roundPercent(coin.quote.USD.percent_change_7d)
      }}</span
      >&nbsp;&nbsp;30D:
      <span :class="percentClass(coin.quote.USD.percent_change_30d)">{{
        roundPercent(coin.quote.USD.percent_change_30d)
      }}</span>
      &nbsp;&nbsp;90D:
      <span :class="percentClass(coin.quote.USD.percent_change_90d)">{{
        roundPercent(coin.quote.USD.percent_change_90d)
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Coin",
  props: {
    coin: Object,
  },
  methods: {
    formatCurrency(price) {
      const pieces = parseFloat(price).toFixed(2).split("");
      let ii = pieces.length - 3;
      while ((ii -= 3) > 0) {
        pieces.splice(ii, 0, ",");
      }
      return pieces.join("");
    },
    percentClass(percent) {
      return percent >= 0 ? "green" : "red";
    },
    roundPercent(percent) {
      return Math.round(percent * 10) / 10 + "%";
    },
  },
};
</script>

<style scoped>
div {
  width: 90%;
  max-width: 490px;
  margin: 10px auto;
  padding: 5px;
  background-color: #dad7cd;
}
h3 {
  margin: 15px;
}
p {
  font-size: 16px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
