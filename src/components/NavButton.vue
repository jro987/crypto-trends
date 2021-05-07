<template>
  <button :id="id" :class="classes">{{ text }}</button>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    text: String,
    classes: String,
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  display: inline-block;
  margin: 0 25px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #a3b18a;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  border-width: 0;
}
button.active-button {
  background-color: #333;
  color: #ddd;
}
button:hover {
  background-color: #588157;
}
</style>
