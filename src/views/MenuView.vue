<template>
  <div class="menu">
    <AppNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Halaman Daftar 
            <strong>Menu</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Menu Favorit Kamu .."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
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
import AppCardMakanan from "@/components/CardMakanan.vue";
import axios from "axios";

export default {
  name: "MenuView",
  components: {
    AppNavbar,
    AppCardMakanan,
  },
  data() {
    return {
      foods: [],
      search: "",
    };
  },
  methods: {
    setfood(data) {
      this.foods = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setfood(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setfood(response.data))
      .catch((error) => console.log(error));
  },
};
</script>