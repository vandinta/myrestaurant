<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Pesan Dengan Mudah,</strong>
                <br />Dengan Smartphone Anda
              </h2>
              <p>Ayo pilih dan pesan makanan favorit Anda</p>
              <router-link class="btn btn-lg btn-info" to="/menu">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/ilustrasi.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-4">
          <img src="../assets/img/ilustrasi.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Pesan Dengan Mudah,</strong>
                <br />Dengan Smartphone Anda
              </h2>
              <p>Ayo pilih dan pesan makanan favorit Anda</p>
              <button class="btn btn-lg btn-info">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHero",
};
</script>

<style>
</style>