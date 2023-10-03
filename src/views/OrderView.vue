<template>
  <div class="rrder-sukses">
    <AppNavbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/img/menunggu.png" width="300" />
          <h2><strong>Order Sukses!!</strong></h2>
          <h4>Orderan Anda sedang diproses <br> Silakan Menunggu</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";

export default {
  name: "OrderView",
  components: {
    AppNavbar,
  },
};
</script>

<style>
</style>