<template>
  <router-link to="{{ to }}">
    <div>{{ text }}</div>
  </router-link>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    text: String,
  },
};
</script>

<style scoped>
div {
  display: inline-block;
  margin: 0 25px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #a3b18a;
  color: #333;
  font-size: 16px;
  font-weight: 600;
}
div:hover {
  background-color: #588157;
}
</style>
