<template>
  <div>
    <h1>Crypto Currency Trends</h1>
    <p>Sort by:</p>
    <NavButton
      text="USD Price"
      @click="$emit('sort-by-price')"
      id="price-button"
      classes="sort-button active-button"
    />
    <NavButton
      text="24H Change"
      @click="$emit('sort-by-24h')"
      id="24h-button"
      classes="sort-button"
    />
    <NavButton
      text="7D Change"
      @click="$emit('sort-by-7d')"
      id="7d-button"
      classes="sort-button"
    />
    <NavButton
      text="30D Change"
      @click="$emit('sort-by-30d')"
      id="30d-button"
      classes="sort-button"
    />
    <NavButton
      text="90D Change"
      @click="$emit('sort-by-90d')"
      id="90d-button"
      classes="sort-button"
    />
  </div>
</template>

<script>
import NavButton from "./NavButton";

export default {
  name: "Header",
  components: {
    NavButton,
  },
};
</script>

<style scoped>
div {
  background-color: #3a5a40;
  width: 100%;
  padding: 30px 0;
}
h1 {
  margin: 0 0 25px 0;
  color: #ddd;
}
p {
  color: #ddd;
}
</style>
