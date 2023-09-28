<template>
  <div class="app-navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Restaurant</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-link" href="/">Home</b-nav-item>
          <b-nav-item class="nav-link" href="/menu">Menu</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-link" href="/keranjang">Keranjang<b-icon-bag></b-icon-bag><span class="badge badge-success">0</span></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>
/* Component-specific styles here */
</style>
