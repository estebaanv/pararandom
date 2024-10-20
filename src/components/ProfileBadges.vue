<template>
  <div class="badge-container">
    <img v-if="idiomaDominado === 'Español'" src="../assets/Imagenes/banderaespaña.png" alt="Bandera de España" />
    <img v-else-if="idiomaDominado === 'Inglés'" src="../assets/Imagenes/USA.png" alt="Bandera de Estados Unidos" />
    <br />
    <img src="../assets/Imagenes/Fuego.png" alt="">
  </div>
</template>

<script>
export default {
  props: {
    idiomaDominado: String,
    fireBadge: String
  }
}
</script>

<style scoped>

.body{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: #D9E2EC;
    font-family: 'Roboto', sans-serif;
    color: black;
}

.badge-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.badge-container img {
  width: 100px;
  height: 100px;
}
</style>
