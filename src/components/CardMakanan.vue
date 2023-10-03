<template>
  <div class="card shadow card-product">
    <img :src=" '../assets/img/' + product.gambar " class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p
        class="card-text"
      >Harga : Rp. {{ product.harga }}</p>
      <center><router-link class="btn btn-info" :to="'/menu/'+product.id"><b-icon-cart></b-icon-cart> Pesan</router-link></center>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCardMakanan',
  props: ['product']
}
</script>

<style>

</style>