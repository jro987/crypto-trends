<template>
  <Header
    @sort-by-price="sortByPrice()"
    @sort-by-24h="sortBy24h()"
    @sort-by-7d="sortBy7d()"
    @sort-by-30d="sortBy30d()"
    @sort-by-90d="sortBy90d()"
  />
  <div>
    <h1>My Follows</h1>
    <Coins :coins="coinsFollowed" />
    <br />
    <h1>Trends</h1>
    <Coins :coins="coins" @add-coin="addCoin" />
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Coins from "./components/Coins";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Coins,
  },
  data() {
    return {
      coins: [],
      coinsFollowed: [],
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
            "X-CMC_PRO_API_KEY": process.env.VUE_APP_API_KEY,
          },
        }
      );
      const data = await res.json();
      var arr = [];
      for (let key in data) {
        data[key]["key"] = key;
        arr.push(data[key]);
      }
      return arr[1];
    },
    addCoin(id) {
      this.coinsFollowed.push(this.coins.find((x) => x.id === id));
    },
    sortByPrice() {
      this.coins
        .sort(function (a, b) {
          return a.quote.USD.price - b.quote.USD.price;
        })
        .reverse();
      this.activeButton("price-button");
    },
    sortBy24h() {
      this.coins
        .sort(function (a, b) {
          return (
            a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h
          );
        })
        .reverse();
      this.activeButton("24h-button");
    },
    sortBy7d() {
      this.coins
        .sort(function (a, b) {
          return a.quote.USD.percent_change_7d - b.quote.USD.percent_change_7d;
        })
        .reverse();
      this.activeButton("7d-button");
    },
    sortBy30d() {
      this.coins
        .sort(function (a, b) {
          return (
            a.quote.USD.percent_change_30d - b.quote.USD.percent_change_30d
          );
        })
        .reverse();
      this.activeButton("30d-button");
    },
    sortBy90d() {
      this.coins
        .sort(function (a, b) {
          return (
            a.quote.USD.percent_change_90d - b.quote.USD.percent_change_90d
          );
        })
        .reverse();
      this.activeButton("90d-button");
    },
    activeButton(label) {
      const button = document.getElementsByClassName("active-button");
      button[0].classList.remove("active-button");
      document.getElementById(label).classList.add("active-button");
    },
  },
  async created() {
    this.coins = await this.fetchCoins();
    this.sortByPrice();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
