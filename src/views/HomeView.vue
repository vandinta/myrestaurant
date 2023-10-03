<template>
  <div class="home">
    <AppNavbar />
    <div class="container">
      <AppHero />

      <div class="row mt-4">
        <div class="col">
          <h2>
            Menu
            <strong>Favorit</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/menu" class="btn btn-info float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in foods"
          :key="product.id"
        >
          <AppCardMakanan :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";
import AppHero from "@/components/Hero.vue";
import AppCardMakanan from "@/components/CardMakanan.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    AppNavbar,
    AppHero,
    AppCardMakanan,
  },
  data() {
    return {
      foods: [],
    };
  },
  methods: {
    setfood(data) {
      this.foods = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setfood(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>
