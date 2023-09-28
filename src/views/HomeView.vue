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
          <router-link to="/menu" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar.vue'
import AppHero from '@/components/Hero.vue'

export default {
  name: 'HomeView',
  components: {
    AppNavbar,
    AppHero
  }
}
</script>
