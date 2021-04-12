<template>
  <Header />
  <router-view :coins="coins"></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      coins: [],
    };
  },
  methods: {
    async fetchCoins() {
      const res = await fetch(
        "http://localhost:8080/v1/cryptocurrency/listings/latest",
        {
          method: "GET",
          qa: {
            start: "1",
            limit: "100",
            convert: "USD",
          },
          headers: {
            "X-CMC_PRO_API_KEY": "YOUR_API_KEY_HERE",
          },
        }
      );
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.coins = await this.fetchCoins();
    console.log(this.coins);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
