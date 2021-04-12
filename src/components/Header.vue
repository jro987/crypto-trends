<template>
  <div>
    <h1>Crypto Currency</h1>
    <NavButton text="Trends" to="/" />
    <NavButton text="My Follows" to="/follows" />
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
</style>
